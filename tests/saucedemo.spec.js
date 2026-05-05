const { test, expect } = require('../fixtures/testFixture');
const { user, checkout } = require('../utils/testData');

// 🔹 Runs before every test
test.beforeEach(async ({ app }) => {
  await app.goto();
  await app.login(user.username, user.password);
});


// 🔸 Test 1: Add to cart
test('@smoke Add to cart test', async ({ app }) => {
  await app.addProductToCart();

  // optional validation (URL contains cart)
  await expect(app.page.locator('.shopping_cart_badge')).toHaveText('555');
});


// 🔸 Test 2: Complete checkout
test('@regression Checkout test', async ({ app }) => {
  await app.addProductToCart();

  await app.checkoutFlow(
    checkout.firstName,
    checkout.lastName,
    checkout.zip
  );

  await expect(app.page).toHaveURL(/checkout-complete/);
});


// 🔸 Test 3: Logout
test('@regressionLogout test', async ({ app }) => {
  await app.logout();

  await expect(app.page).toHaveURL(/saucedemo/);
});


// 🔸 Test 4: Negative login (no beforeEach used)
test('Invalid login test', async ({ app }) => {
  await app.goto();

  await app.login('wrong_user', 'wrong_pass');

  await expect(app.page.locator('[data-test="error"]')).toBeVisible();
});