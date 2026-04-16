import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const MAX_W = 1920;
const Q_JPEG = 85;
const Q_PORTRAIT = 90;
const Q_WEBP = 85;
const SKIP_IF_SHRINK_LT = 0.05;
const PORTRAIT_PATTERNS = [/photo\./i, /portrait/i];

const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
};

const isPortrait = (f) => PORTRAIT_PATTERNS.some((re) => re.test(path.basename(f)));

const optimizeJpeg = async (file) => {
  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const needResize = meta.width > MAX_W;
  const quality = isPortrait(file) ? Q_PORTRAIT : Q_JPEG;
  const tmp = file + '.tmp';
  let pipeline = sharp(file);
  if (needResize) pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  await pipeline.jpeg({ quality, mozjpeg: true }).toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before * (1 - SKIP_IF_SHRINK_LT)) {
    fs.renameSync(tmp, file);
    return { action: 'compressed', before, after };
  }
  fs.unlinkSync(tmp);
  return { action: 'skipped', before, after: before };
};

const optimizeWebp = async (file) => {
  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const needResize = meta.width > MAX_W;
  const tmp = file + '.tmp';
  let pipeline = sharp(file);
  if (needResize) pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  await pipeline.webp({ quality: Q_WEBP, effort: 6 }).toFile(tmp);
  const after = fs.statSync(tmp).size;
  if (after < before * (1 - SKIP_IF_SHRINK_LT)) {
    fs.renameSync(tmp, file);
    return { action: 'compressed', before, after };
  }
  fs.unlinkSync(tmp);
  return { action: 'skipped', before, after: before };
};

const convertPngToJpeg = async (file) => {
  const before = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  if (meta.hasAlpha) return { action: 'skipped-alpha', before, after: before, target: file };
  const target = file.replace(/\.png$/i, '.jpg');
  const needResize = meta.width > MAX_W;
  const quality = isPortrait(file) ? Q_PORTRAIT : Q_JPEG;
  let pipeline = sharp(file).flatten({ background: '#ffffff' });
  if (needResize) pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  await pipeline.jpeg({ quality, mozjpeg: true }).toFile(target);
  const after = fs.statSync(target).size;
  if (after < before * 0.6) {
    fs.unlinkSync(file);
    return { action: 'converted', before, after, target };
  }
  fs.unlinkSync(target);
  return { action: 'skipped', before, after: before, target: file };
};

const fmt = (b) => `${Math.round(b / 1024)}KB`;

const run = async () => {
  const publicDir = path.resolve('public');
  const all = walk(publicDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const skipPng = [/og-image\.png$/i, /logo.*\.png$/i, /background\.png$/i, /favicon/i];
  const results = [];
  for (const file of all) {
    try {
      const ext = path.extname(file).toLowerCase();
      let r;
      if (ext === '.jpg' || ext === '.jpeg') r = await optimizeJpeg(file);
      else if (ext === '.webp') r = await optimizeWebp(file);
      else if (ext === '.png') {
        if (skipPng.some((re) => re.test(file))) {
          r = { action: 'skipped-png', before: fs.statSync(file).size, after: fs.statSync(file).size };
        } else {
          r = await convertPngToJpeg(file);
        }
      }
      results.push({ file, ...r });
    } catch (err) {
      console.error(`ERROR ${file}: ${err.message}`);
    }
  }
  const changed = results.filter((r) => r.action === 'compressed' || r.action === 'converted');
  const totalBefore = results.reduce((s, r) => s + (r.before ?? 0), 0);
  const totalAfter = results.reduce((s, r) => s + (r.after ?? 0), 0);
  console.log(`\n[optimize-images] scanned ${results.length} files, changed ${changed.length}`);
  for (const r of changed) {
    const pct = Math.round((1 - r.after / r.before) * 100);
    const rel = path.relative(process.cwd(), r.target ?? r.file);
    console.log(`  ${r.action === 'converted' ? 'CONV' : 'OPT '} ${fmt(r.before)} → ${fmt(r.after)} (-${pct}%) ${rel}`);
  }
  const saved = totalBefore - totalAfter;
  if (saved > 0) console.log(`[optimize-images] total saved: ${fmt(saved)}`);
  if (changed.some((r) => r.action === 'converted')) {
    console.warn(`[optimize-images] ⚠️  PNG→JPG変換が発生。src参照を .png から .jpg に更新する必要あり:`);
    for (const r of changed.filter((r) => r.action === 'converted')) {
      const before = path.relative(process.cwd(), r.file);
      const after = path.relative(process.cwd(), r.target);
      console.warn(`    ${before} → ${after}`);
    }
  }
};

run();
