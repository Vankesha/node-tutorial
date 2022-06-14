const path = require('path')

const pathName = path.join('./test.txt')

const absolute = path.resolve(__dirname, './test.txt')

console.log(absolute);