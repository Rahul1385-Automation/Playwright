const {test,expect}=require('@playwright/test')
test('Web Table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')

//const table= await page.locator('table[name=BookTable]')
//const headers= table.locator('tr th')

//console.log(await headers.allTextContents());

// const rows=  await table.locator('tr');

     //console.log("Rows count:" +await rows.count());

     //const Columns = await table.locator('th');

     //console.log("Columns count:"+await Columns.count());

    const table= await page.locator('#productTable')

   const Rows=await table.locator('tbody tr')

      console.log("Rows count:"+await Rows.count())

      const Columns=await table.locator('thead tr th')

      console.log("Columns count:"+await Columns.count())

      /*const MobileName= Rows.filter({
        has:page.locator('td'),
        hasText: "Smartwatch"
})
       await MobileName.locator('input').check(); */

       //await SelectProduct(Rows,page,'Smartphone')
      // await SelectProduct(Rows,page,'Smartwatch')
      // await SelectProduct(Rows,page,'Tablet')

for(let i=0;i<await Rows.count();i++){
    const row=Rows.nth(i)
    const tds=row.locator('td')

    for(let j=0;j<await tds.count()-1;j++){

        console.log(await tds.nth(j).textContent());

         
    }
}





       await page.waitForTimeout(5000)

      async function SelectProduct(Rows,page,name){
        const MobileName= Rows.filter({
            has:page.locator('td'),
            hasText: name
    })
           await MobileName.locator('input').check(); 
          
       }
   


})