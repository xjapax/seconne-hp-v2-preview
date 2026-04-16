/**
 * HP v2 デプロイ後 自動テスト
 *
 * 使い方:
 *   node scripts/post-deploy-test.mjs                          # 本番
 *   node scripts/post-deploy-test.mjs https://seconne-hp-v2-preview.netlify.app  # テスト環境
 *
 * テスト内容:
 *   1. 全ページ直接アクセス（200確認）
 *   2. 全ページの全リンク収集 → リンク先200確認
 *   3. meta title / description 確認
 *
 * ※ レスポンシブ確認はNetlifyプレビュー（seconne-hp-v2-preview.netlify.app）をブラウザで直接確認する運用
 */

import { chromium } from 'playwright';

const BASE_URL = process.argv[2] || 'https://seconne.co.jp';

// --- Helpers ---
function isInternal(href) {
  if (!href) return false;
  if (href.startsWith('/')) return true;
  try {
    const url = new URL(href);
    return url.origin === new URL(BASE_URL).origin;
  } catch {
    return false;
  }
}

function normalize(href) {
  if (href.startsWith('/')) return new URL(href, BASE_URL).href;
  return href;
}

// --- Test 1 & 2: Crawl all pages, collect all links, verify status ---
async function testAllLinks(browser) {
  console.log('\n========================================');
  console.log('  TEST 1: 全ページ直接アクセス + 全リンク収集');
  console.log('========================================\n');

  const page = await browser.newPage();
  const visited = new Set();
  const toVisit = [BASE_URL + '/'];
  const allLinks = new Map(); // href -> { from, text }
  const results = [];

  // Phase 1: Crawl all internal pages
  while (toVisit.length > 0) {
    const url = toVisit.shift();
    const cleanUrl = url.split('#')[0].split('?')[0].replace(/\/$/, '') || url;
    if (visited.has(cleanUrl)) continue;
    visited.add(cleanUrl);

    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const status = response?.status() || 0;
      const title = await page.title();
      const desc = await page.getAttribute('meta[name="description"]', 'content').catch(() => null);

      results.push({ url: cleanUrl, status, title, description: desc });

      if (status === 200) {
        // Collect all links on this page
        const links = await page.$$eval('a[href]', (anchors) =>
          anchors.map((a) => ({
            href: a.getAttribute('href'),
            text: a.textContent?.trim().slice(0, 40) || '',
          }))
        );

        for (const link of links) {
          if (!link.href || link.href === '#' || link.href.startsWith('javascript:') || link.href.startsWith('mailto:')) continue;

          const fullHref = link.href.startsWith('/') ? new URL(link.href, BASE_URL).href : link.href;

          if (!allLinks.has(fullHref)) {
            allLinks.set(fullHref, { from: cleanUrl, text: link.text });
          }

          // Queue internal links for crawling
          if (isInternal(link.href)) {
            const normalized = normalize(link.href).split('#')[0].split('?')[0].replace(/\/$/, '');
            if (!visited.has(normalized) && !toVisit.includes(normalized)) {
              toVisit.push(normalized);
            }
          }
        }
      }
    } catch (err) {
      results.push({ url: cleanUrl, status: 'ERROR', title: '', description: '', error: err.message });
    }
  }

  // Print page results
  console.log('--- ページ直接アクセス結果 ---');
  let pagePass = 0;
  let pageFail = 0;
  for (const r of results) {
    const icon = r.status === 200 ? '✅' : '❌';
    if (r.status === 200) pagePass++;
    else pageFail++;
    const meta = r.description ? '✓meta' : '⚠no-desc';
    console.log(`  ${icon} ${r.status} ${r.url}  [${meta}] ${r.title || ''}`);
  }
  console.log(`\n  ページ: ${pagePass} OK / ${pageFail} NG\n`);

  // Phase 2: Check all collected links (including external)
  console.log('--- 全リンク先チェック ---');
  let linkPass = 0;
  let linkFail = 0;
  const checkedUrls = new Set();

  for (const [href, info] of allLinks) {
    const cleanHref = href.split('#')[0].split('?')[0].replace(/\/$/, '') || href;
    if (checkedUrls.has(cleanHref)) continue;
    checkedUrls.add(cleanHref);

    // Internal links already checked by crawl
    if (visited.has(cleanHref)) {
      const found = results.find((r) => r.url === cleanHref);
      if (found && found.status === 200) {
        linkPass++;
        continue;
      }
    }

    // External links: HEAD request
    try {
      const res = await fetch(href, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000) });
      if (res.ok) {
        linkPass++;
      } else {
        linkFail++;
        console.log(`  ❌ ${res.status} ${href}`);
        console.log(`     ← ${info.from} 「${info.text}」`);
      }
    } catch (err) {
      linkFail++;
      console.log(`  ❌ ERR ${href} (${err.message?.slice(0, 50)})`);
      console.log(`     ← ${info.from} 「${info.text}」`);
    }
  }
  console.log(`\n  リンク: ${linkPass} OK / ${linkFail} NG (全${checkedUrls.size}件)\n`);

  await page.close();
  return { pagePass, pageFail, linkPass, linkFail, pages: results };
}

// --- Main ---
async function main() {
  console.log(`\n🔍 HP デプロイ後テスト: ${BASE_URL}\n`);

  const browser = await chromium.launch({ headless: true });

  const linkResult = await testAllLinks(browser);

  await browser.close();

  console.log('========================================');
  console.log('  テスト結果サマリ');
  console.log('========================================');
  console.log(`  ページ: ${linkResult.pagePass} OK / ${linkResult.pageFail} NG`);
  console.log(`  リンク: ${linkResult.linkPass} OK / ${linkResult.linkFail} NG`);

  const allOk = linkResult.pageFail === 0 && linkResult.linkFail === 0;
  console.log(`\n  ${allOk ? '✅ 全テストパス' : '❌ 失敗あり — 上記を確認してください'}\n`);

  process.exit(allOk ? 0 : 1);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
