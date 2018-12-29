let EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

describe('pajacyk clicker', function() {	
	let greenButton = element(by.css('.paj-click'));
	let activeThanks = element(by.css('.dziekujemy.active'));

  	it('should be able to click on belly', function() {
		browser.get('https://www.pajacyk.pl');
		greenButton.click();
		
		browser.wait(EC.visibilityOf(activeThanks), 5000);
		browser.wait(EC.invisibilityOf(activeThanks), 5000);
  	});

});
