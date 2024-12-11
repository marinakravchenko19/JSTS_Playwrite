import { test, expect } from '@playwright/test';

test('Verify Get Started URL on Playwright page', async ({ page }) => {

    await page.goto("https://playwright.dev/");
    expect(await page.title()).toContain("Playwright");

    await page.getByText("Get started").click();
    expect(page.url()).toContain("/docs");
});