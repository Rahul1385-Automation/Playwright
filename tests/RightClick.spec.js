const{test,expect}=require('@playwright/test')

test('Right click',async({page})=>{

  await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

  const button=await page.locator('//span[@class="context-menu-one btn btn-neutral"]')
  
 await button.click({button:'right'})
 await page.waitForTimeout(5000)
})