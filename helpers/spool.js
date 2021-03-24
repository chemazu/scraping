const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()
//   await page.goto('http://62.138.8.136/power/index.php?action=index&module=Cases&saved_search_select=e8f03d73-1539-2355-73b1-5fc64135735c&saved_search_select_name=CHEMAZUU&orderBy=CASE_NO&sortOrder=ASC&query=true&searchFormTab=advanced_search&showSSDIV=no')
  
await page.goto('http://62.138.8.136/power/index.php')
await page.type('#user_name', "cchemazu@ikejaelectric.com");
  await page.type('#username_password', "ratFACE_321!");
  await page.click('#bigbutton');
  await page.goto('http://62.138.8.136/power/index.php?action=index&module=Cases&saved_search_select=e8f03d73-1539-2355-73b1-5fc64135735c&saved_search_select_name=CHEMAZUU&orderBy=CASE_NO&sortOrder=ASC&query=true&searchFormTab=advanced_search&showSSDIV=no')

  await page.setViewport({ width: 1298, height: 582 })
  
  await page.waitForSelector('.paginationActionButtons > #selectLinkTop > .sugar_action_button > .glyphicon > .suitepicon')
  await page.click('.paginationActionButtons > #selectLinkTop > .sugar_action_button > .glyphicon > .suitepicon')
  
  await page.waitForSelector('#selectLinkTop #button_select_all_top')
  await page.click('#selectLinkTop #button_select_all_top')
  
  await page.waitForSelector('#actionLinkTop > .sugar_action_button > #delete_listview_top > .hidden-desktop > .suitepicon')
  await page.click('#actionLinkTop > .sugar_action_button > #delete_listview_top > .hidden-desktop > .suitepicon')
  
  await page.click(' #export_listview_top')
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9'
});

  await page.waitForSelector('#actionLinkTop > .sugar_action_button > #delete_listview_top > .hidden-mobile > .suitepicon')
  await page.click('#actionLinkTop > .sugar_action_button > #delete_listview_top > .hidden-mobile > .suitepicon')
  
  await browser.close()
})()