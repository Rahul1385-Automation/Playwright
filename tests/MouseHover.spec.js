const {test,expect}=require('@playwright/test')

test('Mouse Hover',async({page})=>{

     await page.goto('https://www.amazon.in/')

     const Acclist=await page.locator('//span[@id="nav-link-accountList-nav-line-1"]');
    const Babylist= await page.locator('//span[normalize-space()="Baby Wishlist"]');

    await Acclist.hover();
    await  Babylist.hover();
    await page.waitForTimeout(5000);


})