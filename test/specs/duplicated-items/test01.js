var assert = require('assert');
https://54.249.253.252/LoginTop?backUrl=https%3A%2F%2F54.249.253.252%2FMypage%3FSP_PATH%3Dstore
//---------------------------------------------------------
// [Check preconditions]
// server host, user, BUY_LIST, cart flow setting
//---------------------------------------------------------
//     var server_host = 'https://54.249.253.252';
var server_host = 'https://52.193.215.175';

describe('Duplicated-items', function () {

    it('Go to payment page', function () {
        //Do login in LoginTop
        browser.url(server_host + '/LoginTop')
            .element('#userId').setValue('okabe@worksap.co.jp')
            .element('#password').setValue('aaaa1111')
            .click('[data-action-url="' + server_host + '/Login"]')
            .url(server_host + '/Cart')
            .click('[data-action-url="' + server_host + '/cart/addressset"]')
            .click('[data-action-url="' + server_host + '/cart/addresssetchk"]');
            // .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
        ;
        var aCnt = browser.selectorExecute("//a", function(a) {

            return a.href;
        }, " a on this page");
        console.log(aCnt);

        // $('#next_link')
        // browser.click('#payMethodKb_BANK_TRANSFER');
        // browser.element('#selectedcardsec').setValue('111');
        // browser.pause(3000);
        // $('input[type="radio"]').selectByValue('BANK_TRANSFER');
        // browser.element('#payMethodKb_CREDIT').click();
        //browser.element('[name="payMethodKb"]').selectByValue('value', 'BANK_TRANSFER');
        // browser.click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]');

        console.log('########### payment succeeded');

        //Go to CartTop
        // browser.url(server_host + '/Cart')
        //     .click('[data-action-url="' + server_host + '/cart/addressset"]')
        //     .click('[data-action-url="' + server_host + '/cart/addresssetchk"]');
        // client.selectByValue('#payMethodKb_BANK_TRANSFER', 'BANK_TRANSFER');
        // .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentrtn_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentrtn_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentrtn_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
        // .click('[data-action-url="' + server_host + '/cart/paymentrtn_a1"]')
        ;

        // assert.equal(browser.isExisting('.cart_back_btn'), true);
        // assert.equal(true, true);
    });

});
