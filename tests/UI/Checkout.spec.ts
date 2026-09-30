import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/UI/LoginPage';
import { products } from '../../test-data/selectSomeProducts';
import { SelectProduct } from '../../pages/UI/SelectProduct';
import * as loginData from '../../test-data/loginData.json';
import { productCheckout } from '../../pages/UI/Checkout';

test.describe('Select Product and Checkout', () => {

    let loginpageObj: LoginPage;
    let productsAdded: SelectProduct;
    let checkingOutProduct: productCheckout;

    test.beforeEach(async ({ page }) => {
        loginpageObj = new LoginPage(page);
        productsAdded = new SelectProduct(page);
        checkingOutProduct = new productCheckout(page);

        await loginpageObj.openApp();
        await loginpageObj.login(
            loginData['Valid User'].email,
            loginData['Valid User'].password
        );
    })

    test('Validate remove product from cart', async () => {

        //await page to have title: Automation Exercise - Checkout


    })

    test('Verify speficic products added in the cart', async () => {

        await checkingOutProduct.logout();

    })

    test('Verify product is checked out', async () => {

        await checkingOutProduct.checkout();
        await expect(checkingOutProduct.addressdelivery).toBeVisible();

    })



})
