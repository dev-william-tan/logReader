const assert = require('chai').assert;
const app = require('./app');

describe ('get IP Addresses from file', () => {
    it('return 1 IP Address from text file', () => {
        let text = '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"';
        let result = app.getIP(text);
        assert.equal(result, '177.71.128.21');
    }); 

    it('return more IP Addresses from a bigger text file', () => {
        //let file = ''
    });

}); 