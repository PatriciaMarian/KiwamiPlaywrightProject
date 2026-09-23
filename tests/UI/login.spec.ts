import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/UI/LoginPage";
import loginData from '../../test-data/loginData.json'

test("User to login", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        logindata['Valid User'].email,
        logindata['Valid User'].password
    );
    await expect(page).toHaveURL('https://www.automationexercise.com/');
})

test("Login with invalid email", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        logindata['Invalid email'].email,
        logindata['Invalid email'].password
    );

    await expect(loginpageObj.errormessage).toBeVisible();
})


test("Login with an invalid password", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        logindata['Invalid password'].email,
        logindata['Invalid password'].password
    );

    await expect(loginpageObj.errormessage).toBeVisible();
})