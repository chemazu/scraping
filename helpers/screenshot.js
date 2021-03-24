const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
//   await page.goto('https://www.google.com');
await page.goto('http://62.138.8.136/power/index.php')
await page.type('#user_name', "cchemazu@ikejaelectric.com");
  await page.type('#username_password', "ratFACE_321!");
  await page.click('#bigbutton');
  await page.click('.skin-blue sidebar-mini');

  await page.screenshot({path: 'loggedIn.png'});
  await page.setViewport({width: 1000, height: 500})


  // await browser.close();
}

getPic();