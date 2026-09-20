import { test } from "@playwright/test"
import { LoginPage } from "../../pages/UI/LoginPage"
import { SignUp } from "../../../PlaywrightProject/pages/UI/SignUp"

test("User to login", async ({ page }) => {
    const loginpageObj = new LoginPage(page);
    await loginpageObj.openApp();
    await loginpageObj.login("mary123@gmail.com", "12345");
})


test('Register a new user', async ({ page }) => {

    const signUp = new SignUp(page);
    await signUp.registerURL();
    await signUp.registerUser();


}


)