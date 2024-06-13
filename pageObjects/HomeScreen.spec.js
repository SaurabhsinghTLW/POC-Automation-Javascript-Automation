const { test, expect } = require('@playwright/test');
class HomeScreen {
    constructor(page) {
        this.page = page;
        this.abc = page.locator("text=abc").first();

    }

    async validatePageTtile() {
        await expect(this.page).toHaveTitle('Host');
    }

    // Click Benifits
    async selectType(Option) {
        switch (Option) {
            case "abc": {
                await this.abc.click();
                break;
            }

        }
    }
}
module.exports = { HomeScreen };