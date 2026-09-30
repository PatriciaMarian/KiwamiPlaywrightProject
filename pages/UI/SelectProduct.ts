import { Locator, Page, expect } from "@playwright/test";


export class SelectProduct {
    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productDescription: Locator;
    readonly addToCartBtn: Locator;
    readonly contshoppingbtn: Locator;
    readonly addedmodal: Locator;
    readonly placeorderbtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productName = page.locator('.productinfo');   //page.getByAltText('ecommerce website products');
        this.productPrice = page.locator('.productinfo > h2');
        this.productDescription = page.locator('.productinfo > p');
        this.addToCartBtn = page.locator('.productinfo > a.add-to-cart');
        this.placeorderbtn = page.getByRole('button', { name: 'Place Order' });
        this.contshoppingbtn = page.locator('#cartModal button.close-modal');
        this.addedmodal = page.locator('#cartModal');


    }

    async addFirstProductToCart() {
        await this.addToCartBtn.first().click();
        await this.addedmodal.waitFor({ state: 'visible' });
        await this.contshoppingbtn.click();
        await this.addedmodal.waitFor({ state: 'hidden' });
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

                await this.contshoppingbtn.click();
            }
        }

    }
}