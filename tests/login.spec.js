const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');

test.beforeEach('Launch URL and Validate page', async({page}) => {

const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const homeScreen = poManager.getHomeScreenPage();
  await loginPage.addCookies();
  await loginPage.navigateToURL();
  await homeScreen.validatePageTtile();
})


