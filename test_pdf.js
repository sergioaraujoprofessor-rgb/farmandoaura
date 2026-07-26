const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
app.use(express.static('.'));
const server = app.listen(3000, async () => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        
        page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
        page.on('pageerror', err => console.error('BROWSER ERROR:', err));
        
        await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
        
        await page.evaluate(async () => {
            playerData = { name: "Sergio", aura: 100, history: [100], id: '123' };
            await window.gerarCertificado();
        });
        
        await new Promise(r => setTimeout(r, 2000));
        
        await browser.close();
        server.close();
    } catch(e) {
        console.error(e);
        server.close();
    }
});
