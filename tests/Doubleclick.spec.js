const {test,expect}=require('@playwright/test')

test('Double click',async({page})=>{

    await page.locator('https://testautomationpractice.blogspot.com/')

   const btnCopy= await page.locator('//button[normalize-space()="Copy Text"]')
   await btnCopy.dblclick();

   const f1=await page.locator('#field1');

   await expect(f1).toHaveValue("Hello World!");

   await page.waitForTimeout(5000)

})