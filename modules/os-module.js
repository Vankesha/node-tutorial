
// OS stands from operating system !!! 

// This is built in module

const os = require('os')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);