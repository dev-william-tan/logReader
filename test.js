const assert = require('chai').assert;
const app = require('./app');
const fs = require("fs");

//Tests for getIP function

describe ('get IP Addresses from file', () => {
    it('return true when the returned value matches the Regular expression', () => {
        let text = '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"';
        let result = app.getIP(text);
        let ipRegex = /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/gm;
        assert.match(result, ipRegex, 'the input is true to the Regex format');
    }); 

    it('return false if result file does not contain IP format', () => {
        let file = fs.readFileSync("wrong-example-data.log").toString('utf-8');
        let result = app.getIP(file);
        let ipRegex = /[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}/gm;
        assert.match(result, ipRegex, 'the input is false to the Regex format');
    });
}); 

//Tests for countingUnique values function 

describe('get each Unique values in the array', () => {
    it('returns number of unique numbers in the array', () => {
        let numArr = [5, 6, 2, 2, 6, 1 , 3, 6]
        let expected = 5; 
        assert.equal(app.countUnique(numArr), expected);
    });
});

//Tests for getting top 3 repeated values 

describe('get the top 3 repeated values in an array sorted from highest to lowest ', ()=> {
    it('returns the top 3 of duplicated value from the array', () => {
        let arr = [1,2,2,3,3,3];
        let result = app.getTop3(arr); 
        console.log(result);
        expected = [[ '3', 3 ], [ '2', 2 ], [ '1', 1 ] ]; 
        assert.deepEqual(result,expected ); 
    });
});