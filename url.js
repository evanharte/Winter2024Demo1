var url = require("url");
var addr = "http://localhost:3010/default.htm?year=2017&month=february";
var q = url.parse(addr, true);

console.log(q.host); // returns 'localhost:3010'

console.log(q.pathname);
console.log(q.host); // ./default.htm
console.log(q.search); //

var qdata = q.query; // returns an objectt
console.log(qdata.month);
console.log(qdata.year);
