import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/UI/LoginPage"
import { SignUp } from "../../pages/UI/SignUp"


test('Register a new user', async ({ page }) => {

    const signInUser = new SignUp(page);

    await signInUser.registerURL();
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    await signInUser.userSignup();
    await expect(page).toHaveTitle('Automation Exercise - Signup');
    //await expect(page.locator('input[data-qa="email"]')).toBeDisabled();

    await signInUser.registerUser();
    await expect(page).toHaveTitle('Automation Exercise - Account Created');

}

)
/*
test("User to login", async ({ page }) => {

    const loginpageObj = new LoginPage(page);

    await loginpageObj.openApp();
    await loginpageObj.login();

}

)
*/