import { Locator, Page } from "playwright";


export class SelectProduct {
    //readonly continuebutton: Locator;
    readonly productName: Locator;
    readonly addToCartBtn: Locator;
    readonly contshoppingbtn: Locator;
    readonly addedmodal: Locator;
    readonly viewcart: Locator;
    readonly checkoutbtn: Locator;
    readonly placeorderbtn: Locator;

    readonly reviewfill: Locator;

    constructor(page: Page) {
        //this.continuebutton = page.locator('input[data-qa="continue-button"]',); //page.getByRole('button', { name: 'Continue'});
        this.productName = page.getByAltText('ecommerce website products');
        //this.product2 = page.locator('/html/body/section[2]/div/div/div[2]/div[1]/div[6]/div/div[1]/div[1]/a');
        this.addToCartBtn = page.getByRole('button', { name: 'Add To Cart' });
        this.contshoppingbtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewcart = page.getByRole('link', { name: 'View Cart' });
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

    async selectProduct(productsSelected: string[]) {
        const addProducts = this.productName;
        const count = await addProducts.count(); //to use in the for loop
        for (let i = 0; i < count; i++) {
            const name = await addProducts.nth(i).textContent();
            if (name && productsSelected.includes(name.trim())) {
                await this.addToCartBtn.nth(i).click();
            }
        }

    }

}
