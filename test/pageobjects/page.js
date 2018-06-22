var Page = function(){
    this.title = "Main Page";
}

var request = require('request'),
    username = "say_Friend_and_enter",
    password = "3UrC1Nks20U2kDvtIP0GVrU1jiplerU5iU4oepM5zVm3nPeY0x",
    url = "http://testing.opporty.com",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        // Do more stuff with 'body' here
    }
);

Page.prototype.open = function (path) {
    browser.url("/" + path);
}

module.exports = new Page();