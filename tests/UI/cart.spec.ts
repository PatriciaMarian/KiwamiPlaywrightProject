
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/UI/LoginPage';
import { products } from '../../test-data/selectSomeProducts';
import { SelectProduct } from '../../pages/UI/SelectProduct';
import * as loginData from '../../test-data/loginData.json';
import { Cart } from '../../pages/UI/Cart';

test.describe('Products in the cart', () => {

    let loginpageObj: LoginPage;
    let productsAdded: SelectProduct;
    let cartPage: Cart;

    test.beforeEach(async ({ page }) => {
        loginpageObj = new LoginPage(page);
        productsAdded = new SelectProduct(page);
        cartPage = new Cart(page);

        await loginpageObj.openApp();

        await loginpageObj.login(
            loginData['Valid User'].email,
            loginData['Valid User'].password
        );
    })

    test('Verify the Cart page redirection from Select Product and Cart menu', async () => {

        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        await expect(cartPage.page).toHaveURL('https://www.automationexercise.com/view_cart');

        const cartHeaders = await cartPage.getAllHeadersInCartMenu();
        await expect(cartHeaders.item).toBeVisible();
        await expect(cartHeaders.description).toBeVisible();
        await expect(cartHeaders.quantity).toBeVisible();
        await expect(cartHeaders.price).toBeVisible();
        await expect(cartHeaders.total).toBeVisible();

    })
    /*
        test('Validate the specific products are added to the cart', async () => {
    
            const specificDetails = await productsAdded.selectSomeProducts(products);
            await productsAdded.cartlinkmenu.click();
            const cartProducts = await cartPage.getSelectedProductsDetails(products);
            expect.soft(cartProducts).toEqual(specificDetails);
            //await productsAdded.selectSomeProducts(products);
    
        })
    
        
        test('Validate the first product is added to the cart', async () => {
     
            const firstProduct = await productsAdded.addFirstProductToCart();
            await productsAdded.addFirstProductToCart();
            await productsAdded.cartlinkmenu.click();
     
     
     
            //const firstProductInCart = await cartPage.getFirstSelectedProductsdetsils();
            //await expect(firstProductInCart[0]).toBe(firstProduct);
            //await expect(firstProductInCart.description).toBe(firstProduct.description);
            //expect(firstProductInCart.name).toBe(firstProduct.name);
            //expect(firstProductInCart.price).toBe(firstProduct.price);
            //expect(firstProductInCart.description).toBe(firstProduct.description);
        })*/

    test('Delete products from the cart', async ({ page }) => {
        await productsAdded.addFirstProductToCart();
        await productsAdded.cartlinkmenu.click();
        //const initialProduct = await cartPage.getSelectedProductsDetails(products);

        //expect(initialProduct.length).toBeGreaterThan(0);
        await cartPage.removeProduct();

        // const newProductCount = await cartPage.getSelectedProductsDetails(products);
        // expect(newProductCount.length).toBe(newProductCount.length - 1);

        await cartPage.checkoutbtn.click();
        await expect(page).toHaveURL('https://www.automationexercise.com/checkout');
        await expect(page).toHaveTitle('Automation Exercise - Checkout');
    })


})

