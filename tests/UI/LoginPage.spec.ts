import {test} from "@playwright/test"
import { LoginPage } from "../../pages/UI/LoginPage"

test("User to login", async({page}) => {
    const loginpageObj = new LoginPage(page);
    await loginpageObj.openApp();
    await loginpageObj.login("mary123@gmail.com","12345");
})