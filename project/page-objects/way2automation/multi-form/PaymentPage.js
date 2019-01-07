let PaymentPage = function() {

    let submitButton = $('button.btn-danger');

    this.get = () => browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment');

    this.clickOnSubmitButton = () => submitButton.click();

};
module.exports = new PaymentPage();