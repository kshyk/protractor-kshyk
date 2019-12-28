let EC = protractor.ExpectedConditions;

let HomePage = function () {
    let breadButton = $(".click-crumb");
    let thanks = element(by.xpath("//h1[text()='DZIĘKUJEMY!']"));
    this.get = () => browser.get("http://www.okruszek.org.pl");
    this.clickOnBread = () => breadButton.click();
    this.waitForThanksMessage = (timeout) => browser.wait(EC.visibilityOf(thanks), timeout);
};
module.exports = new HomePage();