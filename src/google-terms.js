const puppeteer = require('puppeteer-core');

(async() => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: [
      '--lang=ja-jp,jp'
    ]
  });

  const page = await browser.newPage();
  
  await page.goto('https://policies.google.com/terms?fg=1');

  const lastUpdated = await page.evaluate(() => {
    const matches = document.querySelector('#yDmH0d > c-wiz > div > div > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div > div > p:nth-child(2)')
      .textContent
      .match(/最終更新日:\s+?(.+)\s+?（.+）/);

    return {
      datetime: matches[1],
    }
  });

  // modify
  const body = await page.evaluate(() => {
    const main = document.querySelector("#yDmH0d > c-wiz > div > div > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div > div");

    main.querySelectorAll('a').forEach(a => {
      const text = document.createTextNode(`[${a.textContent}](${a.href})`);
      a.parentNode.appendChild(text);
      a.parentNode.replaceChild(text, a);
    });

    for (let i = 1; i < 5; ++i) {
      main.querySelectorAll(`h${i}`).forEach(h => {
        const text = document.createTextNode(`${'#'.repeat(i)} ${h.textContent}`);
        h.parentNode.appendChild(text);
        h.parentNode.replaceChild(text, h);
      });
    }

    return {
      text: main.innerText,
    }
  });

  await browser.close();

  console.log(JSON.stringify({
    lastUpdated,
    body,
  }));
})();
