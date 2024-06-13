const { LoginPage } = require('../pageObjects/Loginpage.spec');
const { HomeScreen } = require('../pageObjects/HomeScreen.spec');
const { Utils } = require('../features/Utils/utils');

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.homeScreen = new HomeScreen(page);
      
        this.utils = new Utils(page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getHomeScreenPage(){

        return this.homeScreen;
    }


    // getUtilsPage()
    // {
    //     return this.utils;
    // }

}
module.exports = {POManager};