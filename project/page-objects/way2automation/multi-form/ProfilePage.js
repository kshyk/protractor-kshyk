let ProfilePage = function () {
    let nameInput = element(by.model("formData.name"));
    let emailInput = element(by.model("formData.email"));
    let nextSectionButton = element(by.linkText("Next Section"));
    this.getPage = () => browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
    this.setName = (name) => nameInput.sendKeys(name);
    this.setEmail = (email) => emailInput.sendKeys(email);
    this.clickOnNextSectionButton = () => nextSectionButton.click();
};
module.exports = new ProfilePage();