const base = require('@playwright/test');
const { SauceDemoPage } = require('../pages/SauceDemoPage');

exports.test = base.test.extend({
  app: async ({ page }, use) => {
    const app = new SauceDemoPage(page);
    await use(app);
  }
});

exports.expect = base.expect;