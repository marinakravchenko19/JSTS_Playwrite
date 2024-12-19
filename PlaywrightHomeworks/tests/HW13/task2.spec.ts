import { test, expect } from '@playwright/test';

test('Verify post request creates a user', async ({ request }) => {
    const url = "https://dummyjson.com/posts/add";

    const response = await request.post(url, {
        data: {
            title: "Awesome title",
            userId: 10
        }
    });

    const responseJson = await response.json();
    const { title, userId } = responseJson;

    expect(response.status()).toBe(201);
    expect(title).toBe("Awesome title");
    expect(userId).toBe(10);
});