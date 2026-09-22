import { Locator, Page } from "playwright";
import { UserProfile } from "../../Utils/SignupFaker";

export class LoginPage {
    readonly page: Page;
    readonly signuplink: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    //readonly signloginlink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signuplink = page.locator('.fa.fa-lock');
        this.email = page.locator('input[data-qa="login-email"]',);
        this.password = page.locator('input[data-qa="login-password"]',);
        this.loginbutton = page.getByRole('button', { name: 'Login' })
        //this.signloginlink = page.locator('.fa fa-lock')
        //this.signloginlink = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
    }

    async openApp() {

        await this.page.goto('https://www.automationexercise.com');
        await this.signuplink.click();

        //await this.page.goto('https://www.automationexercise.com/login');

    }

    async login() {
        await this.email.fill(UserProfile.loginemail);
        await this.password.fill(UserProfile.loginpassword);
        await this.loginbutton.click();
    }
}