import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../constants/users';
import { pageURLS } from '../../constants/urls';

test('Valid user can login', async ({ page }) => {
    const user = users.standardUserOne;
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginExpectSuccess(user.email, user.password)
    await expect(page).toHaveURL(pageURLS.account.url);
});

test('Invalid user can not log in', async ({ page }) => {
    const user = users.invalidUser;
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginExpectFailure(user.email, user.password)
    await expect(page).toHaveURL(pageURLS.login.url);

    await page.waitForTimeout(2000);

    const ui = await loginPage.getInvalidFieldStatus();
    expect(ui.email).toBe(false);
    expect(ui.password).toBe(false)

    const messages = await loginPage.getInvalidFieldMessage();
    expect(messages.login).toContain('Invalid email or password');
    expect(messages.email).toBeNull();
    expect(messages.password).toBeNull(); 
    
});

test('Invalid email user cannot login', async ({ page }) => {
    const user = users.userWithInInvalidEmail;
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginExpectFailure(user.email, user.password)
    await expect(page).toHaveURL(pageURLS.login.url);

    const ui = await loginPage.getInvalidFieldStatus();
    expect(ui.email).toBe(true);
    expect(ui.password).toBe(false);

    const messages = await loginPage.getInvalidFieldMessage();
    expect(messages.email).toContain('Email format is invalid');
    expect(messages.password).toBeNull(); 
});

test('Invalid password user cannot login', async ({ page }) => {
    const user = users.userWithInvalidPassword;
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginExpectFailure(user.email, user.password)
    await expect(page).toHaveURL(pageURLS.login.url);

    const ui = await loginPage.getInvalidFieldStatus();
    expect(ui.email).toBe(false);
    expect(ui.password).toBe(true);

    const messages = await loginPage.getInvalidFieldMessage();
    expect(messages.email).toBeNull(); 
    expect(messages.password).toContain('Password length is invalid'); 
});