import { Locator, Page } from "playwright";

export class SignUp{
readonly page : Page;
readonly name: Locator;
readonly email: Locator;
readonly signup: Locator;
readonly title: Locator;
readonly password: Locator;
readonly dob: Locator;
readonly firstname: Locator;
readonly lastname: Locator;
readonly company: Locator;
readonly address: Locator;



    constructor(page: Page){

    }

}