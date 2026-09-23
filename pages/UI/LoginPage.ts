import { Locator, Page } from "playwright";
//import { UserProfile } from "../../Utils/SignupFaker";

export class LoginPage {
    readonly page: Page;
    readonly signuplink: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
    readonly errormessage: Locator;
    //readonly signloginlink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.signuplink = page.locator('.fa.fa-lock');
        this.email = page.locator('input[data-qa="login-email"]',);
        this.password = page.locator('input[data-qa="login-password"]',);
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.errormessage = page.getByText('Your email or password is incorrect!');

    }

    async openApp() {

        await this.page.goto('https://www.automationexercise.com');
        await this.signuplink.click();

    }

    async login(email: string, password: string) {

        await this.email.fill(email)
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}