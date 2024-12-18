import { test, expect } from '@playwright/test';

test('Verify form submition', async ({ page }) => {

    await page.goto("http://formy-project.herokuapp.com/form");

    const firstName = page.locator("#first-name");
    await firstName.fill("Sam");

    const lastName = page.locator("#last-name");
    await lastName.fill("Robertson");

    const jobTitle = page.locator("#job-title");
    await jobTitle.fill("Test Automation Engineer");

    const educationLevel = page.locator("#radio-button-2");
    await educationLevel.click();

    const sexCheckbox = page.locator("#checkbox-1");
    await sexCheckbox.check();

    const yearsOfExpirience = page.locator("#select-menu");
    await yearsOfExpirience.selectOption("5-9");

    const date = page.locator("#datepicker");
    await date.fill("14/12/2024");

    const submitButton = page.getByText("Submit");
    await submitButton.click();

    const successAlert = page.locator(".alert-success");
    await expect(successAlert).toHaveText("The form was successfully submitted!");
});