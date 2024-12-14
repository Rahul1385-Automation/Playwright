const {test, expect}=require('@playwright/test');

test('Handle Input Box',async ({page}) => {


    await page.goto('https://demoblaze.com/index.html');
      

    const PageTitile=page.title();
    console.log(PageTitile);
    await expect(page).toHaveTitle('STORE');
 // await expect (page.locator("//input[@id='name']")).toBeEmpty();
 // await expect (page.locator("//input[@id='name']")).toBeEditable();
 // await expect (page.locator("//input[@id='name']")).toBeEnabled();


 // await page.locator("//input[@id='name']").fill("John")

  await page.waitForTimeout(5000);




    


   
    
})