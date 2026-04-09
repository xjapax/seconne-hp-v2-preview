/**
 * OGP画像（1200x630px）をロゴ + キャッチコピーで生成
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { readFileSync } from 'fs';

const OUTPUT = path.resolve('public/og-image.png');
const logoPath = path.resolve('public/seconne-logo-hires.png');
const logoBase64 = readFileSync(logoPath).toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    display: flex;
    flex-direction: column;
    font-family: 'Noto Sans JP', sans-serif;
    margin: 0;
  }
  .top {
    height: 200px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    height: 90px;
  }
  .bottom {
    flex: 1;
    background: linear-gradient(135deg, #1a365d 0%, #243b53 50%, #102a43 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0 60px;
  }
  .catch {
    font-size: 46px;
    font-weight: 700;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 0.02em;
  }
  .accent {
    color: #4299e1;
  }
  .sub {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 500;
    color: rgba(255,255,255,0.7);
    text-align: center;
  }
  .url {
    position: absolute;
    bottom: 24px;
    right: 40px;
    font-size: 16px;
    color: rgba(255,255,255,0.35);
  }
</style>
</head>
<body>
  <div class="top">
    <img class="logo" src="data:image/png;base64,${logoBase64}" />
  </div>
  <div class="bottom">
  <div class="catch">
    1%しかいない即戦力の、<br>
    <span class="accent">採り方を知っている。</span>
  </div>
  <div class="sub">セキュリティ人材 採用コンサルティング</div>
  </div>
  <div class="url">seconne.co.jp</div>
</body>
</html>`;

async function main() {
  const browser = await puppeteer.launch({
    headless: 'shell',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: OUTPUT, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await browser.close();

  console.log(`OGP画像を生成しました: ${OUTPUT}`);
}

main().catch(console.error);
