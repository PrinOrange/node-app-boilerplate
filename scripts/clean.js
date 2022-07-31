var fs = require('fs');

fs.rm('./build', { recursive: true, force: true },()=>{
    console.log('The output has been cleaned.')
})