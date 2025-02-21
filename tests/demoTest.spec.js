
import { test, expect } from '@playwright/test';
// import { loginPage, demoBlazeHomePage } from '../pages/pages'; //not working
import { loginPage } from '../pages/loginpage';
import { demoBlazeHomePage } from '../pages/demoBlazeHomePage';

test.skip('Demo blaze launch browser', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    await page.title();//to get title of browser tab
    await page.url(); // to fetch the url
    await expect(page).toHaveTitle("STORE"); //added validation
    await page.close();
})

test('login and validate alert in demo blaze website', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    let login = new loginPage(page);
    let homepage = new demoBlazeHomePage(page);
    await login.loginTodemoBlaze('','');
    await page.evaluate(() => { alert('Wrong password.') });
    await page.on('dialog', async dialog => { await dialog.dismiss() })
    await login.closeDemoBlazeLogin();
    await login.loginTodemoBlaze('coolraj','raj');
    await homepage.logoutDemoBlaze();
    await page.close();
})