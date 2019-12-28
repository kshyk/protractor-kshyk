let EC = protractor.ExpectedConditions;

let ThanksPage = function () {
    let activeThanks = $(".dziekujemy.active");
    this.waitForThanksMessage = timeout => browser.wait(EC.visibilityOf(activeThanks), timeout);
    this.waitForThanksMessageDisappear = timeout => browser.wait(EC.invisibilityOf(activeThanks), timeout);
};
module.exports = new ThanksPage();