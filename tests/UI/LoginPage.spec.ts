import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/UI/LoginPage"
import { SignUp } from "../../../PlaywrightProject/pages/UI/SignUp"



test("User to login", async ({ page }) => {
    const loginpageObj = new LoginPage(page);
    await loginpageObj.openApp();
    await loginpageObj.login();


}

)


test('Register a new user', async ({ page }) => {

    const signUp = new SignUp(page);
    await signUp.registerURL();
    await signUp.userSignup();
    await expect(page).toHaveTitle('Automation Exercise - Signup');

    await signUp.registerUser();
    await expect(page).toHaveTitle('Automation Exercise - Account Created');

    //await expect(page.locator('input[data-qa="email"]')).toBeDisabled();


}

)
