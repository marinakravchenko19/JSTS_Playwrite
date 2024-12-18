import { test, expect } from '@playwright/test';

test('Verify adding to card', async ({ page }) => {

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");

    const searchBar = page.locator("#entry_217822");

    // selecting Phones and PDAs in the search bar because Top Trending Categories is currently empty
    const dropdownButton = searchBar.locator("button.btn.dropdown-toggle");
    await dropdownButton.click();

    const phonesAndPdas = searchBar.getByText("Phones & PDAs");
    await phonesAndPdas.click();

    const searchButton = searchBar.locator("[type=submit]");
    await searchButton.click();
    await page.waitForLoadState();

    const filterBar = page.locator("#mz-filter-content-0");

    const minPriceInput = filterBar.getByPlaceholder("Minimum Price");
    await minPriceInput.fill("135");
    await minPriceInput.press("Enter");

    const maxPriceInput = filterBar.getByPlaceholder("Maximum Price");
    await maxPriceInput.fill("165");
    await maxPriceInput.press("Enter");

    const numberOfResults = page.getByText(/Showing 1 to 8 of 8/);
    await expect(numberOfResults).toBeVisible();

    const productsSelector = "#entry_212469 .product-thumb";
    await page.waitForSelector(productsSelector);
    const foundProducts = await page.locator(productsSelector).all();
    expect(foundProducts.length).toBe(8);

    foundProducts.forEach(async prod => {
        await expect(prod).toContainText("HTC Touch HD");
    });

    const firstProduct = foundProducts[0];
    await firstProduct.hover();

    const addToCartButton = firstProduct.locator(".btn-cart");
    await addToCartButton.click();

    const cartSelector = "#entry_217825 a";
    page.waitForSelector(cartSelector);
    const cartButton = page.locator(cartSelector);
    await cartButton.click();

    const priceTableSelector = "#entry_217847 table.table.mb-0 td";
    page.waitForSelector(priceTableSelector);
    const totalPrice = page.locator(priceTableSelector).last();
    await expect(totalPrice).toContainText("$146.00");
});