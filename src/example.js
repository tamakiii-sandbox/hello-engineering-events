const puppeteer = require('puppeteer-core');

(async() => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({
    path: 'example.png'
  });

  await browser.close();
})();
