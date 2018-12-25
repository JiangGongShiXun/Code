const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('yjl.jpeg');
const out = fs.createWriteStream('yjl.jpeg.gz');

inp.pipe(gzip).pipe(out);