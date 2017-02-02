var assert = require('assert');
//---------------------------------------------------------
// [Check preconditions]
// server host, user, BUY_LIST, cart flow setting
//---------------------------------------------------------
//     var server_host = 'https://54.249.253.252';
var server_host = 'https://52.199.195.118';

describe('Duplicated-items', function () {
    it('Go to payment page by mocha', function () {
        //Do login in LoginTop
        browser.url(server_host + '/bpApp/LoginTop')
            .element('#userId').setValue('okabe@worksap.co.jp')
            .element('#password').setValue('aaaa1111')
            .click('[data-action-url="' + server_host + '/bpApp/Login"]')
            .url(server_host + '/bpApp/Cart')
            .click('[data-action-url="' + server_host + '/bpApp/cart/address"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/addresschk"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/addressoptchk"]')
            .click('#agree')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentchk"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentrtn"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentchk"]')
        ;
    });
});

describe('Duplicated-items2', function () {
    it('Input credit info', function () {
        browser.url(server_host + '/bpApp/Logout')
        browser.url(server_host + '/bpApp/LoginTop')
            .element('#userId').setValue('okabe@worksap.co.jp')
            .element('#password').setValue('aaaa1111')
            .click('[data-action-url="' + server_host + '/bpApp/Login"]')
            .url(server_host + '/bpApp/Cart')
            .click('[data-action-url="' + server_host + '/bpApp/cart/address"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/addresschk"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/addressoptchk"]')
            .click('#creditInputType_INPUT_NEW')
            .element('#off_cardNo01').setValue('4111')
            .element('#off_cardNo02').setValue('1111')
            .element('#off_cardNo03').setValue('1111')
            .element('#off_cardNo04').setValue('1111')
            .element('#cardsec').setValue('111')
            .element('#off_cmonth').selectByAttribute('value', '12')
            .element('#off_cyear').selectByAttribute('value', '18')
            .element('#off_cname').setValue('OKABE')
            .click('#agree')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentchk"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentrtn"]')
            .click('[data-action-url="' + server_host + '/bpApp/cart/paymentchk"]')
        ;
    });
});


// describe('Duplicated-items - Pana', function () {
//     it('Go to payment page by mocha', function () {
//         server_host = 'https://54.249.253.252';
//         browser.url(server_host + '/LoginTop')
//             .element('#userId').setValue('okabe@worksap.co.jp')
//             .element('#password').setValue('aaaa1111')
//             .click('[data-action-url="' + server_host + '/Login"]')
//             .url(server_host + '/Cart')
//             .click('[data-action-url="' + server_host + '/cart/addressset"]')
//             .click('[data-action-url="' + server_host + '/cart/addresssetchk"]')
//             .click('[data-action-url="' + server_host + '/cart/paymentchk_a1"]')
//             .click('[data-action-url="' + server_host + '/cart/paymentrtn_a1"]')
//         ;
//         browser.waitUntil(true, 10000);
//     });
// });

