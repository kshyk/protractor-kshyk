exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['pajacyk.spec.js', 'okruszek.spec.js'],
	capabilities: {
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 2,
		chromeOptions: {
			args: ['--disable-infobars',
				   '--disable-gpu',
				   '--disable-dev-shm-usage',
				   '--start-maximized',
				   '--no-sandbox']
	    }
  	}
}