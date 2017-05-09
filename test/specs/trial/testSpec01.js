var assert = require('assert');
// describe('webdriver.io page', function() {
//     it('should have the right title - the fancy generator way', function () {
//         browser.url('http://webdriver.io');
//         var title = browser.getTitle();
//         assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
//     });
// });
describe('spa-manager', function() {
    it('Plan page', function () {
        browser.url('https://syusyu.github.io/spa-manager/src/');
        var title = browser.getTitle();
        assert.equal(title, 'SPA');

        console.log('##### Initial state of the selected plan.')
        var new_plan = $('[name="newplan"]');
        assert.equal(new_plan.getValue(), '1');

        console.log('##### Device elements related to the selected plan.')
        var devices = browser.elements('#devices option');
        assert.equal(devices.value.length, 4);

        console.log('##### Select the second plan.');
        browser.click('#newplan2');

        // console.log('##### Device elements related to the selected plan (2).')
        // devices = browser.elements('#devices option');
        // assert.equal(devices.value.length, 3);
        //
        // console.log('##### Get pop-up text');
        // var warning_text = browser.getText('spa-modal-contents-body ul li');
        // console.log('##### warning=' + warning_text);

    });
});