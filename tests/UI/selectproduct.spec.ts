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

        test('Verify all the products are displayed', async ({ page }) => {

            await productsAdded.allProductsDisplayed();
        }
        )

        test('Add some products to cart', async ({ page }) => {

            await productsAdded.selectSomeProducts(products);

            //await expect(productsAdded.addedmodal).toBeVisible();
            //to await
        }
        )

        test.only('Add all products to cart', async ({ page }) => {

            await productsAdded.addAllProductsToCart();
            await expect(productsAdded.viewcart).toBeVisible();
            //to await
        }
        )

    })
})
