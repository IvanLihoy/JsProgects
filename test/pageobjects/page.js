var Page = function(){
    this.title = "Main Page";
}

Page.prototype.open = function(){
    var username = 'say_Friend_and_enter';
    var password = '3UrC1Nks20U2kDvtIP0GVrU1jiplerU5iU4oepM5zVm3nPeY0x';
    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    
    var header = {'Host': 'testing.opporty.com', 'Authorization': auth};
    var request = client.request('GET', '/', header);
    browser.url(request)
}

module.exports = new Page();