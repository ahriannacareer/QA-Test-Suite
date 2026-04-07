import { test, expect } from '@playwright/test';
import { apiURLS } from '../../constants/urls';
import { users } from '../../constants/users';

test.describe('Authentication API', () => {
  test('Login succeeds with valid customer credentials', async ({ request }) => {
    const user = users.standardUserOne;
    const loginPayload = {
      email: user.email,
      password: user.password,
    };

    const response = await request.post(apiURLS.login.url, {
      data: loginPayload,
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

   
    expect(body.access_token).toBeTruthy();
    expect(typeof body.access_token).toBe('string');
    expect(body.access_token.length).toBeGreaterThan(10);
  });

  test('Login fails with invalid password', async ({ request }) => {
    const user = users.userWithWrongPassword;
    const invalidLoginPayload = {
      email: user.email,
      password: user.password,
    };

    const response = await request.post(apiURLS.login.url, {
      data: invalidLoginPayload,
    });

    expect(response.status()).toBe(401);

    const body = await response.json();

    
    expect(body).toHaveProperty('error');
    expect(body.error).toBeTruthy();
  });

  test('Login fails when password is missing', async ({ request }) => {
    const user = users.standardUserOne;
    const missingPasswordPayload = {
      email: user.email,
    };

    const response = await request.post(apiURLS.login.url, {
      data: missingPasswordPayload,
    });

    expect(response.status()).toBe(401);
    

    const body = await response.json();
    expect(body).toBeTruthy();
  });
});