const{test,expect}=require('@playwright/test')

test('Client App Test',async({page})=>{

    
    const productname='ZARA COAT 3';
    const products=  page.locator('.card-body');
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();
   const titles= await page.locator('.card-body b').allTextContents();
            console.log(titles);
            
         const count=await products.count();
          for(let  i=0; i <count; i++){

            if(await products.nth(i).locator('b').textContent()===productname)
            {
                await products.nth(i).locator('text= Add To Cart').click();
                break;

                
            }
            
        }
          await page.waitForTimeout(5000)
          
        })