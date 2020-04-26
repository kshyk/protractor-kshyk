let EC = protractor.ExpectedConditions;

let HomePage = function () {
    this.get = () => browser.get("http://www.okruszek.org.pl");
    this.clickOnBread = () => $(".click-crumb").click();
    let thanks = element(by.xpath("//h1[text()='DZIĘKUJEMY!']"));
    this.waitForThanksMessage = (timeout) => browser.wait(EC.visibilityOf(thanks), timeout);
};
module.exports = new HomePage();