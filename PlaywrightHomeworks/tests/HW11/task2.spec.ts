import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll("Navigate to URL", async ({ browser }) => {

    page = await browser.newPage();
    await page.goto('https://playwright.dev/');

});

test('Verify page URL starts with a specific URL part', async () => {

    const url = page.url();
    expect(url.startsWith("https://playwright.dev")).toBe(true);

});

test('Verify page contains 1 Get Started link', async () => {

    const link = await page.getByText("Get started");
    await expect(link).toHaveCount(1);
});