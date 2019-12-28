browser.ignoreSynchronization = true;
let fiveSeconds = 5000;
let homePage = require("./page-objects/pajacyk/HomePage");
let thanksPage = require("./page-objects/pajacyk/ThanksPage");

describe("pajacyk clicker", function () {

    it("should be able to click on belly", function () {
        homePage.get();
        homePage.clickOnBelly();
        thanksPage.waitForThanksMessage(fiveSeconds);
        thanksPage.waitForThanksMessageDisappear(fiveSeconds);
    });

});
