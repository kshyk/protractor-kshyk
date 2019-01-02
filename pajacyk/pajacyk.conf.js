exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['pajacyk.spec.js'],
	capabilities: {
    	browserName: 'chrome',
		chromeOptions: {
			args: ['disable-infobars', 'start-maximized']
	    }
  	}
}