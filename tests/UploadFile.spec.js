const {test,expect}=require('@playwright/test')

test('Upload File',async({page})=>{

    await page.goto('https://easyupload.io/')

    await page.waitForSelector('.dz-button');

    await page.locator('.dz-button').click();

    

    



    
})