const LoginPage = require('../pageobjects/login.page');

describe('login to user account', function() {
    it('should open home page', function() {
        //LoginPage.open('https://" + "say_Friend_and_enter" + ":" + "3UrC1Nks20U2kDvtIP0GVrU1jiplerU5iU4oepM5zVm3nPeY0x" + "@" + "testing.opporty.com');
        LoginPage.open();
    })

    it('should be able to login', function(){
        LoginPage.signinButton.click();
        LoginPage.inputLoginCreds(LoginPage.emailInput, LoginPage.passInput, 'lihoy@singree.com', "1q2w3e4r5t");
        browser.sync();
        LoginPage.submitForm();
    })
})