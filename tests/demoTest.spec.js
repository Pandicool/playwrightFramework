
import {test, expect} from '@playwright/test';

test('Global QA launch browser', async ({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/");
    await expect(page).toHaveTitle("Demo Testing Site - GlobalSQA");
    await page.close();
})