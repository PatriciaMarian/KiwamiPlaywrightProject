import { Page, Locator } from '@playwright/test';

export class Cart {

  readonly page: Page;
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
  readonly cartdeletebtn: Locator;
  readonly checkoutbtn: Locator;

  constructor(page: Page) {

    this.page = page;
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
    this.cartdeletebtn = page.locator('.cart_quantity_delete');
    this.checkoutbtn = page.locator('a.check_out');

  }

  async getAllHeadersInCartMenu() {

    return {
      item: this.itemmenu,
      description: this.descriptionmenu,
      quantity: this.quantitymenu,
      price: this.pricemenu,
      total: this.totalmenu
    }
  }

  async getSelectedProductsDetails(products: string[]) {
    const selectedNames = await this.cartproductname.allTextContents();
    const selectedPrices = await this.cartprice.allTextContents();
    const selectedDescription = await this.cartdescription.allTextContents();

    const allProducts = selectedNames.map((_, i) =>
    ({
      name: selectedNames[i].trim(),
      description: selectedDescription[i].trim(),
      price: selectedPrices[i].trim(),
    }))
    return allProducts.filter(p => products.includes(p.name));

  }

  async getFirstSelectedProductsdetsils() {  //getfirstproductdetails
    const name = await this.cartproductname.first().textContent();
    const price = await this.cartprice.first().textContent();
    const description = await this.cartdeletebtn.first().textContent();

    return {
      name: name?.trim(),
      price: price?.trim(),
      description: description?.trim()
    }

  }

  async removeProduct() {
    await this.cartdeletebtn.first().click();
  }
}
