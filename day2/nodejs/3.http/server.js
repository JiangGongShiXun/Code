var http = require("http");
var fs = require("fs");
// 创建服务器
// request请求
// response响应
var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url)
    fs.writeFile('./message.txt', req.url, function () {
        res.end("已接收信息");
    })
});
server.listen(8000);

// document.querySelectorAll(".tt-msg-content-h5-chat")

// var index = 0;
// setInterval(function () {
//     var chat = document.querySelectorAll(".tt-msg-content-h5-chat");
//     var length = chat.length; // 当前直播间的信息数量
//     if (index != length) {
//         var text = chat[length-1].innerText
//         console.log(text)
//         // 把信息发送给后端
//         $.ajax({
//             type: "GET",
//             url: "http://localhost:8000",
//             data: {
//                 text: text
//             },
//             success: function (data) {
//                 console.log(data)
//             }
//         })
//         index = length
//     }
// }, 1000)