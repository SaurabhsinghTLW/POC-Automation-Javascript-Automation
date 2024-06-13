const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('text=abc');

        
    }
    async validateLoginScren() {
        await expect(this.pageHeader).toBeVisible();
   
    }

}
module.exports = { LoginPage };