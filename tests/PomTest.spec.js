import{test, expect} from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';

test('Pom Test',async({page})=>{

   const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

})