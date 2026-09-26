import { Locator, Page } from "playwright";


export class SelectProduct {
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productDescription: Locator;
    readonly addToCartBtn: Locator;
    //readonly contshoppingbtn: Locator;
    //readonly addedmodal: Locator;
    //readonly viewcart: Locator;
    readonly placeorderbtn: Locator;

    readonly reviewfill: Locator;

    constructor(page: Page) {
        this.productName = page.locator('.productinfo');   //page.getByAltText('ecommerce website products');
        this.productPrice = page.locator('.productinfo > h2');
        this.productDescription = page.locator('.productinfo > p');
        this.addToCartBtn = page.getByRole('button', { name: 'Add To Cart' });
        this.reviewfill = page.locator('.form-control');
        this.placeorderbtn = page.getByRole('button', { name: 'Place Order' });
        //this.contshoppingbtn = page.getByRole('button', { name: 'Continue Shopping' });
        //this.viewcart = page.getByRole('link', { name: 'View Cart' });
        //this.addedmodal = page.locator('.modal-content');
        //Assertion needed Title: Automation Exercise
        //Assertion page to contain: Features Items
        //checkout page title: Automation Exercise - Checkout 

        //payment title assertion: Automation Exercise - Payment

        //checkout page to contain: Your delivery address & Your billing address & Review Your Order

    }

    async allProductsDisplayed() {
        const names = await this.productName.allTextContents();
        const prices = await this.productPrice.allTextContents();
        const descriptions = await this.productDescription.allTextContents();
        const addToCartButtonCount = await this.addToCartBtn.count();

        if (names.length === 0)
            throw new Error('No product names found on the page.');

        if (names.length !== prices.length || names.length !== descriptions.length || names.length !== addToCartButtonCount) {
            throw new Error('Mismatch in the number of product names, prices, descriptions, or add to cart buttons.');
        }

    }

    async selectSomeProducts(productsSelected: string[]) {
        const addProducts = this.productName;
        const count = await addProducts.count(); //to use in the for loop
        for (let i = 0; i < count; i++) {
            const name = await addProducts.nth(i).textContent();
            if (name && productsSelected.includes(name.trim())) {
                await this.addToCartBtn.nth(i).click();
            }
        }

    }
    async addAllProductsToCart() {
        const count = await this.productName.count();
        for (let i = 0; i < count; i++) {
            await this.addToCartBtn.nth(i).click();
        }
    }

}