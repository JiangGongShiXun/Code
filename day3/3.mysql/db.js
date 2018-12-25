var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'yao',
    password: '123456',
    database: 'jgsx' // 数据库名字
});

connection.connect(); // 执行连接
var username = 'alen';
var skill = '3d';
var age = 7
// 执行sql语句
connection.query("INSERT INTO `students` (`id`, `username`, `skill`, `age`) VALUES (NULL, '" + username + "', '" + skill + "', '" + age + "')", function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end(); // 关闭数据库