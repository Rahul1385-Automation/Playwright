const{test,expect}=require('@playwright/test')

test('Handle Dropdown',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')

 // await page.locator('#country').selectOption({label:'India'})
  // await page.locator('#country').selectOption('India')
  // await page.locator('#country').selectOption({value:'uk'})
   //await page.locator('#country').selectOption({index:3})
   //await page.selectOption('#country','India')

    //Assertions//
  //Approach 1
    //const options =await page.locator('#country Option')
      //await expect(options).toHaveCount(10)

     //Approach 2 
    const options= await page.$$('#country option')
    console.log(options.length)
    await expect(options.length).toBe(10)



   await page.waitForTimeout(5000)


})
