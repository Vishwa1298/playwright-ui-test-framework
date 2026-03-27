import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { loginData } from '../test-data/loginData';

test('Valid login test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await expect(await loginPage.getSuccessMessage()).toBeVisible();
});

test('Invalid login test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login(
    loginData.invalidUser.username,
    loginData.invalidUser.password
  );

  await expect(await loginPage.getErrorMessage()).toBeVisible();
});
