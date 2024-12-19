import { test, expect } from '@playwright/test';

test('Verify user data', async ({ request }) => {
    const url = "https://reqres.in/api/users/2";

    const response = await request.get(url);
    const responseJson = await response.json();

    expect(response.status()).toBe(200);
    expect(responseJson.data.first_name).toBe("Janet");
    expect(responseJson.data.last_name).toBe("Weaver");
    expect(responseJson.data.email).toBe("janet.weaver@reqres.in");
});