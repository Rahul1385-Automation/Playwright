const{test,expect}=require('@playwright/test')

test('Handle Multiselect Dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   // const options = page.locator('#colors option')

   // await expect(options).toHaveCount(7)

 //const options=  await page.$$('#colors option')
      //console.log(options.length)
      // await expect(options.length).toBe(7)

       //const content=await page.locator('#colors').textContent()

           // await expect (content.includes('Black')).toBeFalsy()

            //check presence of value in the dropdown

            const options = await page.$$('#colors option')

            let status=false;

            for( const option of options)
            {
              //console.log(await option.textContent)
             let value= await option.textContent()
             if(value.includes('Red'))
             {
              status=true;
              break;
             }
             
            }
            await expect(status).toBeTruthy();

  

     

    await page.waitForTimeout(5000)

})