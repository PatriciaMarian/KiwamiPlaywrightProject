import { Locator, Page } from "playwright";

export class productCheckout {
    readonly checkoutbtn: Locator;
    readonly cartmenu: Locator;
    readonly logoutmenu: Locator;

    constructor(page: Page) {
        this.checkoutbtn = page.getByRole('button', { name: ' Proceed To Checkout' });
        this.cartmenu = page.getByRole('link', { name: ' Cart' });
        this.logoutmenu = page.getByRole('link', { name: ' Logout' });


    }


    async checkout() {
        await this.cartmenu.click();
        await this.checkoutbtn.click();

        //await expect(page to havetext('Your delivery address'));
    }

    async logout() {
        await this.logoutmenu.click();
    }
}