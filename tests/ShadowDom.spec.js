const{test,expect}=require('@playwright/test')

test('Handle Shadow DOM',async({page})=>{

    await  page.goto('https://selectorshub.com/xpath-practice-page/')
    const shadowroot= await  page.locator('div#app2');
 
    await shadowroot.locator('#pizza').fill('I like Pizza')
 
 
 
       await page.waitForTimeout(3000)


})