import { Locator, Page } from "playwright";


export class SelectProduct {
    readonly continuebutton: Locator;

    constructor(page: Page) {
        this.continuebutton = page.locator('input[data-qa="continue-button"]',);
        //Assertion needed Title: Automation Exercise
        //Assertion page to contain: Features Items

    }

    async addProduct(productName: string[]) {


    }

}


productname: t
productdescriptio:
productprice:
addtocart:

addtocartmodal: '.modal-title w-100'
coninue shopping button: '.btn btn-success close-modal btn-block'

    ('input[data-product-id="6"]',)