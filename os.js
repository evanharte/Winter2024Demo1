var os = require("os");

console.log("OS CPU architecture: " + os.arch());
console.log("Free memory of the system: " + os.totalmem());
console.log("OS platform: " + os.platform());
console.log("Uptime: " + os.uptime());
console.log("Hostname: " + os.hostname());
