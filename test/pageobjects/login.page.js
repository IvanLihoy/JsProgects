const Page = require('./page');

const LoginPage = Object.create(Page, {
    signinButton: { get: () => browserA.element("button[class='logIn")},
    emailInput: { get: () => browserA.element("input[name='email']")},
    passInput: { get: () => browserA.element("input[name='password']")},
    signinForm: { get: () => browserA.element("button[class='btn-react btn btn-default']")},
    userName: { get: () => browserA.$("//a[@id='basic-nav-dropdown']")},
    mp: { get: () => browserA.element("a[class='nav_menu_mp']")},

    inputLoginCreds: {
        value: function(inputLogin, inputPass, email, pass) {
            inputLogin.setValue(email);
            inputPass.setValue(pass);
        }
    },
    open: {
        value: function() {
            Page.open.call();
            //location.reload(true);
        }
    },
    submitForm: {
        value: function() {
            this.signinForm.submitForm();
            expect(this.userName.isExisting()).to.be.equal(true);
        }
    }
})

module.exports = LoginPage;
