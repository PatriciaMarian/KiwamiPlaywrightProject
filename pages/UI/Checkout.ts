import { Locator, Page } from "playwright";

export class CheckoutPage {
    readonly checkoutbtn: Locator;
    readonly cartmenu: Locator;

    readonly deliveryaddress: Locator;
    readonly billingaddress: Locator;
    readonly reviewyourorder: Locator;

    readonly itemmenu: Locator;
    readonly descriptionmenu: Locator;
    readonly quantitymenu: Locator;
    readonly pricemenu: Locator;
    readonly totalmenu: Locator;
    readonly cartproductname: Locator;
    readonly cartdescription: Locator;
    readonly cartprice: Locator;
    readonly cartquantity: Locator;
    readonly carttotal: Locator;

    readonly logoutmenu: Locator;
    readonly placeorderbtn: Locator;
    readonly reviewfill: Locator;

    constructor(page: Page) {
        this.checkoutbtn = page.getByRole('button', { name: ' Proceed To Checkout' });
        this.cartmenu = page.getByRole('link', { name: ' Cart' });

        this.deliveryaddress = page.locator('#address_delivery');
        this.billingaddress = page.locator('#address_invoice');
        this.reviewyourorder = page.getByText('Review Your Order');

        this.itemmenu = page.locator('.image');
        this.descriptionmenu = page.locator('.description');
        this.quantitymenu = page.locator('.quantity');
        this.pricemenu = page.locator('.price');
        this.totalmenu = page.locator('.total');
        this.cartproductname = page.locator('.cart_description');
        this.cartdescription = page.locator('.cart_description > h4 > a');
        this.cartprice = page.locator('.cart_price');
        this.cartquantity = page.locator('.cart_quantity');
        this.carttotal = page.locator('.cart_total');

        this.logoutmenu = page.getByRole('link', { name: ' Logout' });
        this.reviewfill = page.locator('.form-control');
        this.placeorderbtn = page.locator('a.btn.btn-default.check_out');

    }
    async getCartMenuDetailsIncheckoutMenu() {

        return {
            item: this.itemmenu,
            description: this.descriptionmenu,
            quantity: this.quantitymenu,
            price: this.pricemenu,
            total: this.totalmenu
        }
    }

    async getDeliveryAddress() {
        return this.deliveryaddress;
    }

    async getBillingAddress() {
        return this.billingaddress;
    }

    async checkout() {

        await this.reviewfill.fill('Product checked out in good condition');
        await this.placeorderbtn.click();
    }

    async logout() {
        await this.logoutmenu.click();
    }
}