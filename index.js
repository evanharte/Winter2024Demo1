const http = require("http");
const port = 3010;

const server = http.createServer((req, res) => {
  res.end("Hello Word");
});

server.listen(port, () => {
  console.log(`Http server running at port ${port}`);
});
