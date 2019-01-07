browser.ignoreSynchronization = true;
let fiveSeconds = 5000;
let homePage = require('./page-objects/okruszek/HomePage');

describe('breadcrumb clicker', function() {
    
    it('should be able to click on bread', function() {
        homePage.get();
        homePage.clickOnBread();

        homePage.waitForThanksMessage(fiveSeconds);
    });

});
