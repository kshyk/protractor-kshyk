let EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;
let fiveSeconds = 5000;

describe('pajacyk clicker', function() {	
	let greenButton = $('.paj-click');
	let activeThanks = $('.dziekujemy.active');

  	it('should be able to click on belly', function() {
		browser.get('https://www.pajacyk.pl');
		greenButton.click();
		
		browser.wait(EC.visibilityOf(activeThanks), fiveSeconds);
		browser.wait(EC.invisibilityOf(activeThanks), fiveSeconds);
  	});

});
