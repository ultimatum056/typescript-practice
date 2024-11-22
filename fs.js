const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()

const readStream = fs.createReadStream("./file1.txt", {
    encoding: 'utf8',
    highWaterMark: 2,
})

readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

const writeStream = fs.createWriteStream("./file2.txt")

readStream.pipe(writeStream)


// readStream.on('data', (chunks) => {
//     console.log(chunks)
//     writeStream.write(chunks)

// })