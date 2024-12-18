import { test, expect } from '@playwright/test';

test('Verify herokuapp login error', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/login");

    const loginField = page.locator("#username");
    const passwordField = page.locator("#password");
    const loginButton = page.locator("button.radius");

    await loginField.fill("invalid");
    await passwordField.fill("password");
    await loginButton.click();

    await expect(page.locator("#flash")).toContainText("Your username is invalid!");
});

test('Verify herokuapp successfull login', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/login");

    const loginField = page.locator("#username");
    const passwordField = page.locator("#password");
    const loginButton = page.locator("button.radius");

    await loginField.fill("tomsmith");
    await passwordField.fill("SuperSecretPassword!");
    await loginButton.click();

    await expect(page.locator("#flash")).toContainText("You logged into a secure area!");
});