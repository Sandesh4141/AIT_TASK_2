const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Request arrived...");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});

server.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
