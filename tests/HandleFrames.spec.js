const {test,expect}=require('@playwright/test')

test('frames',async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/')

const allframes= await page.frames()

   console.log(allframes.length)

   //Using name or url of the frame

   /*const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})

   await frame1.locator("input[name='mytext1']").fill('Hello')*/

   //using frame locator

   await page.frameLocator('frame[src="frame_1.html"]').locator("input[name='mytext1']").fill('Hello');

   await page.waitForTimeout(3000)




})