$.ajax({
    type: "GET",
    url: "http://localhost:3000/dashboard",
    data: {},
    success: function (data) {
        var results = data.results
        console.log(results);
        var i = 0;
        var length = results.length;
        var html = "";
        for (; i < length; i++) {
            html += `
                <tr>
                    <td>${results[i].id}</td>
                    <td>${results[i].username}</td>
                    <td>${results[i].skill}</td>
                    <td>${results[i].age}</td>
                </tr>
            `
        }
        console.log(html)
        $("#list").html(html)
    }
})