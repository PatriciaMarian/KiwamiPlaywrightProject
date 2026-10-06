import { test, expect, request, } from '@playwright/test';
import { ClientRequest } from 'http';

test.describe('API Tests for Automation Exercise', () => {

    test('Verify API to create user account POST', async ({ request }) => {
        const response = await request.post('https://www.automationexercise.com/api/createAccount', {
            form: {

                name: "maria",
                email: "maria11@gmail.com",
                password: "Welcome98",
                Title: "Miss",
                birth_date: "20",
                birth_month: "03",
                birth_year: "1998",
                firstname: "Maria",
                lastname: "Lopez",
                company: "Personal",
                address1: "Township",
                Address2: "Sarit",
                country: "India",
                state: "Mumbai",
                city: "Delhi",
                zipcode: "00100",
                mobile_number: "9176765645"

            },
            headers: {
                Referer: 'https://www.automationexercise.com/'
            }
        });

        const body = JSON.parse(await response.text());

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(201);
        expect(body.message).toBe('User created!');

        /*
                console.log('Status:', response.status());
                console.log('Content-Type:', response.headers()['content-type']);
                console.log('Body:', await response.text());
                console.log('URL:', response.url());
                console.log('Body:', body);
        
                */
    })

    test('Verify API to update user account', async ({ request }) => {
        const response = await request.put('https://automationexercise.com/api/updateAccount', {
            form: {

                name: "maria",
                email: "maria11@gmail.com",
                password: "Welcome98",
                Title: "Miss",
                birth_date: "20",
                birth_month: "03",
                birth_year: "1998",
                firstname: "Mariana",
                lastname: "Lopez",
                company: "Personal",
                address1: "Township",
                Address2: "Sarit",
                country: "USA",
                state: "Mumbai",
                city: "Delhi",
                zipcode: "00100",
                mobile_number: "9176943645"

            },
            headers: {
                Referer: 'https://www.automationexercise.com/'
            }
        });

        const body = JSON.parse(await response.text());

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe('User updated!');
        // expect(body).toHaveProperty('responseCode', 200);

    })

    test('Verify API to delete user account', async ({ request }) => {

        const response = await request.delete('https://automationexercise.com/api/deleteAccount',
            {
                form: {
                    email: "maria11@gmail.com",
                    password: "Welcome98"
                },
                headers: {
                    Referer: 'https://automationexercise.com/'
                }
            });

        const body = await response.json();
        console.log(body);

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe('Account deleted!');

    })


    test('Verify API to login with valid credentials', async ({ request }) => {
        const response = await request.post('https://www.automationexercise.com/api/verifyLogin', {
            form: {
                email: 'mary123@gmail.com',
                password: 'hzDAeWEA5GmkC@'
            },
            headers: {
                Referer: 'https://www.automationexercise.com/'
            }
        });
        const body = JSON.parse(await response.text());

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe('User exists!');
    })


    test('Verify API to login with invalid credentials', async ({ request }) => {

        const response = await request.post('https://automationexercise.com/api/verifyLogin',
            {
                form: {
                    email: 'invalid@example.com',
                    password: 'wrongpassword'
                },
                headers: {
                    Referer: 'https://automationexercise.com/'
                }
            });

        const body = await response.json();
        console.log(body);

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(404);
        expect(body.message).toBe('User not found!');
    })

    test('Verify API to login with incomplete credentials', async ({ request }) => {

        const response = await request.post('https://automationexercise.com/api/verifyLogin',
            {
                form: {
                    //email: '',
                    password: 'wrongpassword'
                },
                headers: {
                    Referer: 'https://automationexercise.com/'
                }
            });
        const body = await response.json();
        console.log(body);

        expect(response.status()).toBe(200);
        expect(body.responseCode).toBe(400);
        expect(body.message).toBe('Bad request, email or password parameter is missing in POST request.');
    })

    test('Verify API to GET products list', async ({ request }) => {

        const response = await request.get('https://automationexercise.com/api/productsList');
        expect(response.status()).toBe(200);

        const jsonData = await response.json();
        console.log(jsonData);


    })
})