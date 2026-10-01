import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/UI/LoginPage';
import { products } from '../../test-data/selectSomeProducts';
import { SelectProduct } from '../../pages/UI/SelectProduct';
import * as loginData from '../../test-data/loginData.json';
import { Cart } from '../../pages/UI/Cart';
import { CheckoutPage } from '../../pages/UI/Checkout';

test.describe('Product Checkout from the cart', () => {

    let loginpageObj: LoginPage;
    let productsAdded: SelectProduct;
    let cartPage: Cart;
    let productCheckout: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginpageObj = new LoginPage(page);
        productsAdded = new SelectProduct(page);
        cartPage = new Cart(page);
        productCheckout = new CheckoutPage(page);

        await loginpageObj.openApp();

        await loginpageObj.login(
            loginData['Valid User'].email,
            loginData['Valid User'].password
        );
    })

    test('Verify the Checkout page redirection from Cart page', async () => {

        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        await cartPage.checkoutbtn.click();

        await expect(cartPage.page).toHaveURL('https://www.automationexercise.com/checkout');

        const checkOutMenuHeaders = await productCheckout.getCartMenuDetailsIncheckoutMenu();
        await expect(checkOutMenuHeaders.item).toBeVisible();
        await expect(checkOutMenuHeaders.description).toBeVisible();
        await expect(checkOutMenuHeaders.quantity).toBeVisible();
        await expect(checkOutMenuHeaders.price).toBeVisible();
        await expect(checkOutMenuHeaders.total).toBeVisible();

    })


    test('Validate the delivery and billing address are displayed in checkout page', async () => {

        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        await cartPage.checkoutbtn.click();

        expect(await productCheckout.getDeliveryAddress()).toBeVisible();
        expect(await productCheckout.getBillingAddress()).toBeVisible();

    })


    test('Validate user submitting checkout', async ({ page }) => {
        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        await cartPage.checkoutbtn.click();
        await productCheckout.checkout();

        await expect(page).toHaveURL('https://www.automationexercise.com/payment');
    })

    test('User to log out successfully', async ({ page }) => {

        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        await cartPage.checkoutbtn.click();
        await productCheckout.checkout();
        await productCheckout.logout();
    })
})
