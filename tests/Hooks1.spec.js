const {test,expect}=require('@playwright/test')
let page;
test.beforeEach('Hooks1',async({browser})=>{

  page= await browser.newPage();

    await page.goto('https://www.demoblaze.com/')

    await page.locator('#login2').click()

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    await page.locator('//button[normalize-space()="Log in"]').click()

});

    test.afterEach(async()=>{
      await page.locator('#logout2').click();

    })
      
     //Homepage

    test('Home Page',async()=>{

     const products=await page.$$('.hrefch')

       expect(products).toHaveLength(9)

      await page.waitForTimeout(5000);
    }) 

   test('Add producs to cart ',async()=>{

    

    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click()

    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click();
    
       page.on('dialog',async dialog=>{
        expect (dialog.message()).toContain('Product added.')

        await dialog.accept()

      })

      

        

})

