let HomePage = function() {

    let greenButton = $('.paj-click');

    this.get = () => browser.get('https://www.pajacyk.pl');

    this.clickOnBelly = () => greenButton.click();
    
};
module.exports = new HomePage();