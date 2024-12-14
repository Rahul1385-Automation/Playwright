const {test,expect}=require('@playwright/test')
test.skip('Alert with OK',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("alert")
        expect (dialog.message()).toContain("I am an alert box!")
        await dialog.accept();

    })
    await page.locator("//button[@id='alertBtn']").click();
   await page.waitForTimeout(5000)
});


test.skip('Confirmation dialog Alert with OK',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("confirm")
        expect (dialog.message()).toContain("Press a button!")
        await dialog.accept();

    })
    await page.locator("//button[@id='confirmBtn']").click();

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
   await page.waitForTimeout(5000)

});


test('prompt dialog',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain("prompt")
        expect (dialog.message()).toContain('Please enter your name')
        expect (dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("John");

    })
    await page.locator("//button[@id='promptBtn']").click();

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')
   await page.waitForTimeout(5000)

});