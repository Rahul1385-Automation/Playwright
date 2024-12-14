const {test,expect}=require('@playwright/test')

test('Handle Multiple Windows',async({browser})=>{

         const context= await browser.newContext()

        const page = await context.newPage();

         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
         const documentlink = page.locator("//a[normalize-space()='OrangeHRM, Inc']");
         
         const [newPage]=  await Promise.all([
             context.waitForEvent('page'),
             documentlink.click()
         ])

         const text = await newPage.locator("div[class='homepage-slider-content'] h1").textContent();
         console.log(text);
})