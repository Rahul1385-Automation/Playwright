const{test,expect}=require('@playwright/test')

test('Handle Checkboxes',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')

 await page.locator('#sunday').check()
 expect(await page.locator('#sunday')).toBeChecked
 expect(await page.locator('#sunday').isChecked()).toBeTruthy()
 expect(await page.locator('#monday').isChecked()).toBeFalsy()
  const checkboxesLocators=['#sunday','#saturday','#thursday'

  ];

       for(const locator of checkboxesLocators)  //select multiple checkboxes
        {
              await page.locator(locator).check()

        }
        await page.waitForTimeout(5000)
        for(const locator of checkboxesLocators) 
        {
            if(await page.locator(locator).isChecked())
                await page.locator(locator).uncheck();

        }


 await page.waitForTimeout(5000)

})