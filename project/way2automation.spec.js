let EC = protractor.ExpectedConditions;
let profilePage = require('./page-objects/way2automation/multi-form/ProfilePage');
let interestsPage = require('./page-objects/way2automation/multi-form/InterestsPage');
let paymentPage = require('./page-objects/way2automation/multi-form/PaymentPage');

describe('multi form filler', function() {
    
    it('should be able to fill multi step form', function() {
        profilePage.get();

        profilePage.setName('Kshyk');
        profilePage.setEmail('temp@example.com');
        profilePage.clickOnNextSectionButton();

        interestsPage.setPS4();
        interestsPage.clickOnNextSectionButton();

        expect(element(by.tagName('h3')).getText()).toContain('Test Completed');
        
        paymentPage.clickOnSubmitButton();
        browser.wait(EC.alertIsPresent(), 5000);
        let alert = browser.switchTo().alert();
        expect(alert.getText()).toEqual('awesome!');
    });

});
