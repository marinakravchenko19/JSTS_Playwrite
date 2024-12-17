import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll("Navigate to URL", async ({ browser }) => {

  page = await browser.newPage();
  await page.goto('https://example.com/');

});

test('Verify page title has Example Domain text', async () => {

  expect(await page.title()).toBe("Example Domain");

});

test('Verify page URL contains example.com', async () => {

  expect(page.url()).toContain("example.com");

});

test('Verify page has text', async () => {

  const pageContent = await page.textContent('body');

  expect(pageContent).toMatch(/This domain is for use in illustrative examples/);
});

test('Verify H1 element has Example Domain text', async () => {

  const h1Elem = page.locator("h1");
  await expect(h1Elem).toHaveText("Example Domain");
});
