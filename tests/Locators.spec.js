const {test, expect}=require('@playwright/test');
 test('Locators', async({page})=>{
    
    await page.goto("https://demoblaze.com/index.html")


    //await  page.locator('id=login2').click();
    await page.click('id=login2')

    await page.locator('#loginusername').fill("pavanol")
    
    //await page.fill('#loginusername','pavanol')
   // await page.type('#loginusername','pavanol')

    await page.fill("//input[@id='loginpassword']", 'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const LogoutLink= await page.locator("(//a[normalize-space()='Log out'])[1]")

      await expect(LogoutLink).toBeVisible();
     await  page.pause(5000)

      await page.close()

})
    
 


    

