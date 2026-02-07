const http = require('http');

http.createServer((req, res) => {
  res.write("CI/CD Pipeline Working Successfully");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");