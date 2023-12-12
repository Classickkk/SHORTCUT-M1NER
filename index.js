const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    args: ['--no-sandbox'] // Passando '--no-sandbox' como argumento separado
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://four3543534.onrender.com');
  } catch (error) {
    console.error('Erro ao abrir o site:', error);
  }
})();
