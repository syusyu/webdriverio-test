var assert = require('assert');
describe('Multi-tab-BTO', function() {
    it('Reload BTO page twice', function () {
        browser.url('http://okabe-server/ItemDetail?cmId=62102');
        assert.equal(browser.isExisting('#EC_simCartIn'), true);
        browser.saveScreenshot('./captures/multi-tab-bto/01-01.png');

        browser.url('http://okabe-server/ItemDetail?cmId=62102');
        assert.equal(browser.isExisting('#EC_simCartIn'), true);
        browser.saveScreenshot('./captures/multi-tab-bto/01-02.png');
    });

    it('Open BTO page in 2 tabs', function () {
        browser.url('http://okabe-server/ItemDetail?cmId=62102');
        assert.equal(browser.isExisting('#EC_simCartIn'), true);
        browser.saveScreenshot('./captures/multi-tab-bto/02-01.png');

        browser.newWindow('http://okabe-server/ItemDetail?cmId=62102');
        assert.equal(browser.isExisting('#EC_simCartIn'), true);
        browser.saveScreenshot('./captures/multi-tab-bto/02-02.png');

        browser.switchTab();
        assert.equal(browser.isExisting('#EC_simCartIn'), false);
        assert.equal(browser.isExisting('#sim_multi_page_err'), true);
        browser.saveScreenshot('./captures/multi-tab-bto/02-03.png');
    });
});
