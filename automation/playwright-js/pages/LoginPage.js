import { pageURLS } from "../constants/urls"; 

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('[data-test="login-submit"]');

        this.loginEmailError = page.locator('#email-error');
        this.loginPasswordError = page.locator('#password-error'); 
        this.loginError = page.locator('.help-block'); 
    }

    async goto() {
        await this.page.goto(pageURLS.login.url);
    }

    async getInvalidFieldStatus() {
        const emailVisible = await this.loginEmailError.isVisible().catch(() => false);
        const passwordVisible = await this.loginPasswordError.isVisible().catch(() => false);

        return {
            email: emailVisible
            ? (await this.usernameInput.getAttribute('class'))?.includes('is-invalid')
            : false,

            password: passwordVisible
            ? (await this.passwordInput.getAttribute('class'))?.includes('is-invalid')
            : false,
        };
    }


    async getInvalidFieldMessage() {
        const emailVisible = await this.loginEmailError.isVisible().catch(() => false);
        const passwordVisible = await this.loginPasswordError.isVisible().catch(() => false);
        const loginVisible = await this.loginError.isVisible().catch(() => false);
        return {
            email: emailVisible
            ? (await this.loginEmailError.textContent())?.trim()
            : null,

            password: passwordVisible
            ? (await this.loginPasswordError.textContent())?.trim()
            : null,

            login: loginVisible
            ? (await this.loginError.textContent())?.trim()
            : null,
        };
    }

    async loginExpectFailure(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async loginExpectSuccess(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL('**/account');
    }
}