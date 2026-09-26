import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/UI/LoginPage';
import { products } from '../../test-data/selectSomeProducts';
import { SelectProduct } from '../../pages/UI/SelectProduct';
import * as loginData from '../../test-data/loginData.json';

test.describe('Select Product and Checkout', () => {

    let loginpageObj: LoginPage;
    let productsAdded: SelectProduct;

    test.beforeEach(async ({ page }) => {
        loginpageObj = new LoginPage(page);
        productsAdded = new SelectProduct(page);

        await loginpageObj.openApp();

        await loginpageObj.login(
            loginData['Valid User'].email,
            loginData['Valid User'].password
        );
    })

    test('Verify all the products are displayed', async () => {

        await productsAdded.allProductsDisplayed();
    })


    test('Add some products to cart', async () => {

        await productsAdded.selectSomeProducts(products);

        //await expect(productsAdded.viewcart).toBeVisible();

    })

    test('Add the first products to cart', async () => {

        await productsAdded.addFirstProductToCart();
        //await productsAdded.addAllProductsToCart();
        //await expect(productsAdded.addedmodal).toBeHidden();
        //await expect(productsAdded.viewcart).toBeVisible();
        //to await
    })

}
)


