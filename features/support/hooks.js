const { Before, After, AfterStep, Status, AfterAll } = require('@cucumber/cucumber')
const { devices, webkit } = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { fail } = require('assert');
const path = require('path');
const { of } = require('process');
const DeviceDefinations = require('./DeviceDefinations');

const deviceDefinations = new DeviceDefinations();

// // To run on Multiple enviornment
// Before({ timeout: 100 * 4000 }, async function () {
//     this.device = deviceDefinations.getDeviceName();
//     for (device of this.device) {
//         const browser = await webkit.launch({ headless: false });
//         const context = await browser.newContext({
//             ...devices[device],
//           });
//         console.log(devices[device], device);
//         this.page = await context.newPage();
//         this.poManager = new POManager(this.page);
//         const loginPage = this.poManager.getLoginPage();

//         await loginPage.addCookies();
//         await loginPage.navigateToURL();
//         await console.log("Url Is Launched");
//     }
// });

// To run on single enviornment
Before({timeout : 100*4000},async function () {
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext({
        ...devices['iPhone 14 Pro Max'],
    });
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
    const loginPage = this.poManager.getLoginPage();
    
    await loginPage.addCookies();
    await loginPage.navigateToURL();
    await console.log("Url Is Launched");
});

AfterAll(function () {
    console.log("Execution Finished");
});

AfterStep(async function ({ result }) {
    if (result.status == Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot.png' });
    }
});