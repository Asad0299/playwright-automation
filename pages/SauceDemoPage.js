class SauceDemoPage {
    constructor(page) {
      this.page = page;
  
      // Locators
      this.username = page.locator('[data-test="username"]');
      this.password = page.locator('[data-test="password"]');
      this.loginBtn = page.locator('[data-test="login-button"]');
  
      this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
      this.cart = page.locator('[data-test="shopping-cart-link"]');
      this.checkout = page.locator('[data-test="checkout"]');
  
      this.firstName = page.locator('[data-test="firstName"]');
      this.lastName = page.locator('[data-test="lastName"]');
      this.postalCode = page.locator('[data-test="postalCode"]');
      this.continueBtn = page.locator('[data-test="continue"]');
      this.finishBtn = page.locator('[data-test="finish"]');
  
      this.menuBtn = page.getByRole('button', { name: 'Open Menu' });
      this.logoutBtn = page.locator('[data-test="logout-sidebar-link"]');
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com/');
    }
  
    async login(username, password) {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginBtn.click();
    }
  
    async addProductToCart() {
      await this.addToCartBtn.click();
      await this.cart.click();
    }
  
    async checkoutFlow(first, last, zip) {
      await this.checkout.click();
      await this.firstName.fill(first);
      await this.lastName.fill(last);
      await this.postalCode.fill(zip);
      await this.continueBtn.click();
      await this.finishBtn.click();
    }
  
    async logout() {
      await this.menuBtn.click();
      await this.logoutBtn.click();
    }
  }
  
  module.exports = { SauceDemoPage };