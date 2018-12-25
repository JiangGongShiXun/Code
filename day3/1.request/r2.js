var request = require('request');
var fs = require('fs');
// 下载图片
// request('https://up.enterdesk.com/edpic_360_360/23/c4/d5/23c4d51b8dfdb2e8c18721173eb0bcd9.jpg').pipe(fs.createWriteStream('doodle.png'))
// 下载音乐
request('http://fs.open.kugou.com/d91b87bec5d1f21504208f57b9e4fb88/5c218cef/G004/M00/00/01/RA0DAFT6ZjuAUniKAEpgAO-5zno059.mp3').pipe(fs.createWriteStream('doodle.mp3'))