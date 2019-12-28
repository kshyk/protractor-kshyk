let EC = protractor.ExpectedConditions;
let timeout = 5000;

let InterestsPage = function () {
    let xboxRadioButton = $("input[value='xbox']");
    let psRadioButton = $("input[value='ps']");
    let nextSectionButton = element(by.linkText("Next Section"));

    this.get = () => browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests");

    this.setXBox = () => clickOnElement(xboxRadioButton);
    this.setPS4 = () => clickOnElement(psRadioButton);
    let clickOnElement = element => browser.wait(EC.elementToBeClickable(element, timeout)).then(() => element.click());

    this.clickOnNextSectionButton = () => nextSectionButton.click();
};
module.exports = new InterestsPage();