

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/products');
  await page.getByText('Add to cart').nth(1).click();
  await page.getByText(' Added! Your product has').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByText('Add to cart').nth(3).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Home Shopping Cart Proceed To').click();
  await page.locator('.cart_quantity_delete').first().click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('button', { name: 'Continue On Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByText(' Checkout Register / Login').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
});