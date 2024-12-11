import { test, expect } from '@playwright/test';

test('Verify search results for searched text', async ({ page }) => {
    await page.goto("https://www.google.com")

    const textArea = page.locator("xpath=//*[@name='q']");
    await textArea.fill("Playwright");

    //press enter to submit
    await page.keyboard.press('Enter');

    const searchResultsSelector = "xpath=//*[@id='search']//h3";

    await page.waitForSelector(searchResultsSelector);
    const searchResultsElems = page.locator(searchResultsSelector);
    const resultsCount = await searchResultsElems.count();
    expect(resultsCount).toBeGreaterThan(0);
});