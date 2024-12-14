const {test,expect}=require('@playwright/test')

test('Hooks',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click()

    //Homepage

    //test('Home Page',async({page})=>{

     const products=await page.locator('.hrefch')

     await  expect(products).toHaveCount(9)

     await page.locator('#logout2').click();

     await page.waitForTimeout(5000);
});

   test('Add producs to cart ',async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click()

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    
       page.on('dialog',async dialog=>{
        expect (dialog.message()).toContain('Product added.')

        await dialog.accept()

      })

      await page.locator('#logout2').click();

        

})

