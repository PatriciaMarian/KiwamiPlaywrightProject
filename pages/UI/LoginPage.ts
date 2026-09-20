import { Locator, Page } from "playwright";

export class LoginPage{
readonly page : Page;
readonly email: Locator;
readonly password: Locator;
readonly loginbutton: Locator;
//readonly signloginlink: Locator;

    constructor(page: Page){
this.page = page;
this.email = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
this.password = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[3]');
this.loginbutton = page.getByRole('button', { name: 'Login' })
//this.signloginlink = page.locator('.fa fa-lock')
//this.signloginlink = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a')
    }

    async openApp(){

    await this.page.goto('https://www.automationexercise.com/login', {waitUntil: 'networkidle'});
    //this.signloginlink.click();
    
    }

    async login(emailaddress : string ,passwordnote : string ){
        await this.email.fill(emailaddress);
        await this.password.fill(passwordnote);
        await this.loginbutton.click();
    }
}