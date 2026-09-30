import { test, expect } from '@playwright/test';

test('GET api for the login endpoint', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList')
    expect(response.status()).toBe(200)

    console.log(await response.json());
})