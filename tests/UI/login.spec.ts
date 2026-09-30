import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/UI/LoginPage";
import * as loginData from '../../test-data/loginData.json';
//import logindata from '../../test-data/logindata.json'

test("User to login", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        loginData['Valid User'].email,
        loginData['Valid User'].password
    );
    await expect(page).toHaveURL('https://www.automationexercise.com/');
})

test("Login with invalid email", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        loginData['Invalid email'].email,
        loginData['Invalid email'].password
    );

    await expect(loginpageObj.errormessage).toBeVisible();
})


test("Login with an invalid password", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login(
        loginData['Invalid password'].email,
        loginData['Invalid password'].password
    );

    await expect(loginpageObj.errormessage).toBeVisible();
})