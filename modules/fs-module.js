const {readFileSync, writeFileSync} = require('fs')

const file1 = readFileSync('./file1.txt')
const file2 = readFileSync('./file2.txt')

writeFileSync('./both-files.txt',`${file1}, ${file2}`)

console.log(`The first file: ${file1}`)