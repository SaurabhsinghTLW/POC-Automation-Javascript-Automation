const { When, Then, Given } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

Given('I am on Landing page', {timeout : 100*1000}, async function () 
{
  this.homeScreen = this.poManager.getHomeScreenPage();
// this.utils = this.poManager.getUtilsPage();
     this.homeScreen.validatePageTtile();
  });

 
  When('I click on {string} Option', {timeout : 100*4000},async function (Option) 
  {
    await console.log("Selecting: " + Option);
    await this.homeScreen.selectType(Option);
  });


  