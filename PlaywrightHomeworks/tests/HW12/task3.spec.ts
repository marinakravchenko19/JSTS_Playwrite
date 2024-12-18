import { test, expect } from '@playwright/test';

test('Verify w3schools form', async ({ page }) => {

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select");

    const acceptCookiesButtonSelector = "#accept-choices";
    await page.waitForSelector(acceptCookiesButtonSelector);
    const acceptCockiesButton = page.locator(acceptCookiesButtonSelector);
    await acceptCockiesButton.click();

    const resultIframe = page.frameLocator("#iframeResult");
    const dropDown = resultIframe.locator("#cars");
    await dropDown.selectOption("Saab");

    await expect(dropDown).toContainText("Saab");

    const submitButton = resultIframe.locator("[value=Submit]");
    await submitButton.click();

    const submittedHeader = resultIframe.locator("h1");
    await expect(submittedHeader).toHaveText("Submitted Form Data");
});