/**
 * 全ページのフルスクリーンショットを一括生成
 *
 * 使い方:
 *   1. dev サーバー起動: npx next dev -p 3000
 *   2. 別ターミナル: node scripts/screenshot.mjs
 *
 * 出力先: screenshots/
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.resolve('screenshots');

const pages = [
  { name: 'top', path: '/' },
  { name: 'advantage', path: '/advantage' },
  { name: 'interview', path: '/interview' },
  { name: 'company', path: '/company' },
  { name: 'interview-sandj', path: '/interview/sandj' },
  { name: 'interview-vlcseclab', path: '/interview/vlcseclab' },
  { name: 'privacy', path: '/privacy' },
  { name: 'terms', path: '/terms' },
];

const VIEWPORT = { width: 1440, height: 900 };

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log('Chromium を起動中...');
  const browser = await puppeteer.launch({
    headless: 'shell',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  for (const pg of pages) {
    const url = `${BASE_URL}${pg.path}`;
    const filename = `${pg.name}_${timestamp}.png`;
    const filepath = path.join(OUTPUT_DIR, filename);

    process.stdout.write(`  ${pg.name} ...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // スクロールでアニメーション発火
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve(undefined);
            }
          }, 100);
        });
      });
      await new Promise((r) => setTimeout(r, 1000));

      await page.screenshot({ path: filepath, fullPage: true });
      console.log(` → ${filename}`);
    } catch (err) {
      console.log(` ✗ failed: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\n完了！ screenshots/ に ${pages.length} ページ分のPNGを保存しました。`);
  console.log(`場所: ${OUTPUT_DIR}`);
}

main().catch(console.error);
