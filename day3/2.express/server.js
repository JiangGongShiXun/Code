var express = require('express')
var app = express()
// app.all(function (req, res, next) {
//     res.append("Access-Control-Allow-Origin", "*")
//     next()
// })
// 路由
app.get('/', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*")
    res.send('Hello World')
})
app.get('/login', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    res.send('login')
})
app.get('/detail', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    res.send('detail')
})
app.get('/dashboard', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    res.send('dashboard')
})
app.listen(3000)