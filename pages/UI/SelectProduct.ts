import { Locator, Page } from "playwright";


export class SelectProduct {
    readonly continuebutton: Locator;
    readonly product1: Locator;
    readonly product2: Locator;
    readonly contshoppingbtn: Locator;
    readonly addedmodal: Locator;
    readonly viewcart: Locator;
    readonly checkoutbtn: Locator;
    readonly placeorderbtn: Locator;

    readonly reviewfill: Locator;

    constructor(page: Page) {
        this.continuebutton = page.locator('input[data-qa="continue-button"]',); //page.getByRole('button', { name: 'Continue'});
        this.product1 = page.locator('/html/body/section[2]/div/div/div[2]/div[1]/div[3]/div/div[1]/div[1]/a');
        this.product2 = page.locator('/html/body/section[2]/div/div/div[2]/div[1]/div[6]/div/div[1]/div[1]/a');
        this.contshoppingbtn = page.locator('.btn.btn-success.close-modal.btn-block');
        this.viewcart = page.locator('//*[@id="cartModal"]/div/div/div[2]/p[2]/a/u');
        this.addedmodal = page.locator('.modal-content');
        this.checkoutbtn = page.getByRole('button', { name: 'Proceed To Checkout' });
        this.reviewfill = page.locator('.form-control');
        this.placeorderbtn = page.getByRole('button', { name: 'Place Order' });
        //Assertion needed Title: Automation Exercise
        //Assertion page to contain: Features Items
        //checkout page title: Automation Exercise - Checkout 

        //payment title assertion: Automation Exercise - Payment

        //checkout page to contain: Your delivery address & Your billing address & Review Your Order

    }

    async addProduct(productName: string[]) {


    }

}
