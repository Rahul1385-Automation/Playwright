const {test,expect}=require('@playwright/test')
import{ai} from "@zerostep/playwright"

test('AI capability test',async({page})=>{
    const aiArgs={page,test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')

   const text=await ai("what is the Discount price of Tomato",aiArgs)
   expect(text).toEqual("26")

   await page.waitForTimeout(3000)
 


})