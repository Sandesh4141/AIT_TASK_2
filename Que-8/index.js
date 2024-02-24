const os = require('os');

// platform of the operating system
console.log('Platform:', os.platform());

// architecture of the operating system
console.log('Architecture:', os.arch());

// CPU information
console.log('CPU Information:', os.cpus());

// total amount of system memory (in bytes)
console.log('Total Memory:', os.totalmem());

// amount of free system memory (in bytes)
console.log('Free Memory:', os.freemem());

//  user's home directory
console.log('Home Directory:', os.homedir());

// system uptime (in seconds)
console.log('Uptime:', os.uptime());
