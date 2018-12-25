var express = require('express')
var app = express()

var mysql = require('mysql');


app.get('/', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*")
    res.send('Hello World')
})
app.get('/login', function (req, res) {
    console.log(req.query)


})
// 增
app.get('/orders', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*")
    console.log(req.query);
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'yao',
        password: '123456',
        database: 'jgsx' // 数据库名字
    });

    connection.connect(); // 执行连接
    var username = req.query.username;
    var skill = req.query.skill;
    var age = req.query.age;
    // 执行sql语句
    connection.query("INSERT INTO `students` (`id`, `username`, `skill`, `age`) VALUES (NULL, '" + username + "', '" + skill + "', '" + age + "')", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            status: "success"
        })
    });

    connection.end(); // 关闭数据库
})

// 查
app.get('/dashboard', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'yao',
        password: '123456',
        database: 'jgsx' // 数据库名字
    });

    connection.connect(); // 执行连接

    // 执行sql语句
    connection.query('SELECT * FROM students', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            results
        })
    });

    connection.end(); // 关闭数据库
})
app.listen(3000)