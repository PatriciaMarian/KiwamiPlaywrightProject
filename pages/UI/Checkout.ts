import { Locator, Page } from 'playwright';

export class productCheckout {
    readonly page: Page;
    readonly checkoutbtn: Locator;
    readonly cartmenu: Locator;
    readonly logoutmenu: Locator;
    readonly addressdelivery: Locator;
    readonly addressinvoice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutbtn = this.page.locator('a.btn.btn-default.check_out');
        this.cartmenu = page.getByRole('link', { name: ' Cart' });
        this.addressdelivery = page.locator('#address_delivery');
        this.addressinvoice = page.locator('#address_invoice');
        this.logoutmenu = page.getByRole('link', { name: ' Logout' });


    }


    async checkout() {


        await this.cartmenu.click();
        await this.checkoutbtn.click();

    }

    async logout() {
        await this.logoutmenu.click();
    }


}