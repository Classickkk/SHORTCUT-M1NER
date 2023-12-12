const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Para visualizar a interface, mantenha headless como false
  const page = await browser.newPage();
  
  try {
    await page.goto('http://dataverseminer.42web.io');
  } catch (error) {
    console.error('Erro ao abrir o site:', error);
  }
})();
