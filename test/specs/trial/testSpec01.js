var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});


describe('connect api', function() {
    it('request hook', function () {

        browser.url('http://localhost:8080/');
        browser.setupInterceptor();

        var title = browser.getTitle();
        assert.equal(title, 'Connect UI and API');

        var links = $$('a');
        links.forEach(function (link) {
            console.log('### link=' + link.getText());
            link.click();
        });

        browser.pause(1000);

        var requests = browser.getRequests();
        requests.forEach(function(request) {
            console.log('### method=' + request.method + ', url=' + request.url);
        });
    });

});
