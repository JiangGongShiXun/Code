var fs = require('fs') //引入对应的模块实现对用的功能

// 用fs模块的writeFile，写的文件名字，和文字的内容，如果成功则执行最后的回调函数
// fs.writeFile('./test.txt', 'hello world', function (err) {
//     if (err) throw err;
//     console.log('文件已保存');
// });

fs.readFile('./test.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});