const puppeteer = require('puppeteer-core');

(async() => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    // args: [
    //   '--no-sandbox',
    //   // '--allow-insecure-localhost',
    //   '--homepage=about:blank',
    //   '--no-first-run',
    //   '--headless',
    //   '--disable-software-rasterizer',
    //   '--disable-gpu',
    //   '--disable-translate',
    //   '--disable-extensions',
    //   '--disable-setuid-sandbox',
    //   // '--remote-debugging-port=9876',
    // ],
    ignoreDefaultArgs: [
      // '--no-sandbox',
      // '--disable-extensions',
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({
    path: 'example.png'
  });

  await browser.close();
})();
