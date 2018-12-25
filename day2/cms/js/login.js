$(".btn").click(function () {
    $.ajax({
        url: "abc.php", // 跟后端通信的请求地址
        data: {
            username: "abc",
            password: 123456
        }, // 提交的数据
        success: function (data) {
            console.log(data)
        }
    })
})