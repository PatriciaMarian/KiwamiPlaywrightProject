import { Locator, Page } from "playwright";
import { UserProfile } from "../../Utils/SignupFaker";

export class SignUp {
    readonly page: Page;
    readonly signupname: Locator;
    readonly signupemail: Locator;
    readonly signup: Locator;
    readonly title: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly accountname: Locator;
    //readonly accountemail: Locator;
    readonly password: Locator;
    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly checknewsletter: Locator;
    readonly checkreveiveoffers: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly address2: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobile: Locator;
    readonly createbtn: Locator;



    constructor(page: Page) {

        this.page = page;
        this.signupname = page.locator('input[data-qa="signup-name"]',);
        this.signupemail = page.locator('input[data-qa="signup-email"]',);
        this.signup = page.getByRole('button', { name: 'Signup' });
        this.title = page.locator('#id_gender2');

        this.accountname = page.locator('#name');
        //this.accountemail = page.locator('input[data-qa="email"]',);

        this.password = page.locator('input[data-qa="password"]',);
        this.day = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');

        this.checknewsletter = page.locator('#newsletter');
        this.checkreveiveoffers = page.locator('#optin');

        this.firstname = page.locator('#first_name');
        this.lastname = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.mobile = page.locator('#mobile_number');

        this.createbtn = page.getByRole('button', { name: 'Create Account' });

    }

    async registerURL() {
        await this.page.goto('https://www.automationexercise.com/login');

    }

    async registerUser() {

        await this.signupname.fill(UserProfile.signupname);
        await this.signupemail.fill(UserProfile.signupemail);

        await this.signup.click();
        await this.title.check();

        await this.accountname.fill(UserProfile.accountname);
        //await this.accountemail.fill(UserProfile.accountemail); - since its disabled and picks the value from signup and login email.
        await this.password.fill(UserProfile.password);

        await this.day.selectOption(UserProfile.day);
        await this.month.selectOption(UserProfile.month);
        await this.year.selectOption(UserProfile.year);

        await this.checknewsletter.check();
        await this.checkreveiveoffers.check();

        await this.firstname.fill(UserProfile.firstName);
        await this.lastname.fill(UserProfile.lastName);
        await this.company.fill(UserProfile.company);
        await this.address.fill(UserProfile.address);
        await this.address2.fill(UserProfile.address2);
        await this.country.selectOption('Australia');
        await this.state.fill(UserProfile.state);
        await this.city.fill(UserProfile.city);
        await this.zipcode.fill(UserProfile.zipcode);
        await this.mobile.fill(UserProfile.mobile);

        await this.createbtn.click();


    }

}