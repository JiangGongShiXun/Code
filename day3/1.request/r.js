var request = require('request');
var fs = require('fs');
request('https://www.enterdesk.com/special/hanguoshuaige/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile('./test.html', body, function (err) {
        console.log("写入成功")
    })
});