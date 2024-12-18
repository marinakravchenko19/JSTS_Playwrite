import { test, expect } from '@playwright/test';

test('Verify checkboxes', async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/radio.html");

    const checkboxes = await page.locator("[type=checkbox]").all();

    //check checkboxed
    for (let i = 0; i < checkboxes.length; i++) {
        await checkboxes[i].check();
    }

    // verify they are checked
    for (let i = 0; i < checkboxes.length; i++) {
        await expect(checkboxes[i]).toBeChecked();
    }

    //uncheck checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        await checkboxes[i].uncheck();
    }

    // verify they are unchecked
    for (let i = 0; i < checkboxes.length; i++) {
        await expect(checkboxes[i]).not.toBeChecked();
    }
});