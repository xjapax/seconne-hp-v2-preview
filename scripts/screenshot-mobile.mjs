/**
 * モバイル表示のスクリーンショットを生成
 * devサーバー起動中に: node scripts/screenshot-mobile.mjs
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUTPUT_DIR = path.resolve('screenshots');

const pages = [
  { name: 'mobile-top', path: '/' },
  { name: 'mobile-advantage', path: '/advantage' },
  { name: 'mobile-interview', path: '/interview' },
  { name: 'mobile-company', path: '/company' },
];

// iPhone 14 Pro相当
const VIEWPORT = { width: 393, height: 852 };

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log('Chromium を起動中（モバイル表示）...');
  const browser = await puppeteer.launch({
    headless: 'shell',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
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
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 300;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve(undefined);
            }
          }, 80);
        });
      });
      await new Promise((r) => setTimeout(r, 800));
      await page.screenshot({ path: filepath, fullPage: true });
      console.log(` → ${filename}`);
    } catch (err) {
      console.log(` ✗ failed: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\n完了！ screenshots/ にモバイル版PNGを保存しました。`);
}

main().catch(console.error);
