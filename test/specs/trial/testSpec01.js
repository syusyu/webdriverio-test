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
        var
            title, new_plan, devices, device, len,
            warning_text;

        browser.url('https://syusyu.github.io/spa-manager/src/');
        title = browser.getTitle();
        assert.equal(title, 'SPA');

        console.log('##### Initial state of the selected plan.')
        new_plan = $('[name="newplan"]');
        assert.equal(new_plan.getValue(), '1');

        console.log('##### Device elements related to the selected plan.')
        devices = browser.elements('#devices option');
        assert.equal(devices.value.length, 4);

        console.log('##### Select the second plan.');
        browser.click('#newplan2');

        console.log('##### Device elements related to the selected plan. (2)')
        devices = browser.elements('#devices option');
        assert.equal(devices.value.length, 3);

        console.log('##### Get pop-up text');
        browser.click('#show-popup-warning');
        warning_text = browser.getText('.spa-modal-contents-body ul li');

        assert.
        console.log('##### warning=' + warning_text);

    });
});