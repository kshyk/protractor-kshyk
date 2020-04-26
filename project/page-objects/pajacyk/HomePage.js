let HomePage = function () {
    this.getPage = () => browser.get("https://www.pajacyk.pl");
    this.clickOnBelly = () => $(".paj-click").click();
};
module.exports = new HomePage();