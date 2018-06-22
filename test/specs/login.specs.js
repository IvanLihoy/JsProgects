const LoginPage = require('../pageobjects/login.page');

describe('login to user account', function() {
    
    

    it('should open home page', function () {   
        beforeSend(function (xhr)  {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa("say_Friend_and_enter" + ":" + "3UrC1Nks20U2kDvtIP0GVrU1jiplerU5iU4oepM5zVm3nPeY0x"));
        })  
        LoginPage.open();
        //LoginPage.open('https://" + "say_Friend_and_enter" + ":" + "3UrC1Nks20U2kDvtIP0GVrU1jiplerU5iU4oepM5zVm3nPeY0x" + "@" + "testing.opporty.com');
        //browser.deleteCookie()
    })
    
    it('should be able to login', function(){
        LoginPage.signinButton.click();
        LoginPage.inputLoginCreds(LoginPage.emailInput, LoginPage.passInput, 'lihoy123@singree.com', "1111111");
        browser.sync();
        LoginPage.submitForm();
    })
   
    
 
})