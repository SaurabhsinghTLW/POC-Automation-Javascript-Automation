const { expect } = require('@playwright/test');

class ClaimScreen {
    constructor(page) {
        this.page = page;
        this.CancellingATrip = page.locator('text=Cancelling');
       
    }
    async validateClaimsOption() {
        await expect(this.CancellingATrip).toBeVisible();
       
    }
    async selectClaimsOption(ClaimsOption) {
        switch (ClaimsOption) {
            case "Cancelling": {
                await expect(this.ContinueButton).toBeDisabled();
                await this.CancellingATrip.click();
                await this.ContinueButton.click();
                break;
            }}
    }

 
    }
module.exports = { ClaimScreen };