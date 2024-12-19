import { test, expect } from '@playwright/test';

test('Verify products returned', async ({ request }) => {
    const url = "https://dummyjson.com/products";

    const response = await request.get(url, {
        params: {
            skip: 10,
            limit: 5
        }
    });

    const responseJson = await response.json();
    const { products } = responseJson;

    expect(products.length).toBe(5);
    expect(products[0].price).toBe(1899.99);
    expect(products[1].rating).toBeLessThan(4);
    expect(products[products.length - 1].stock).toBeGreaterThan(10);
    expect(products[0].returnPolicy).toBeTruthy();
});