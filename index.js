const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((request, response) => {
  const url = request.url.split("/");
  if (url[1] === "") {
    if (request.method === "GET") {
      response.end("Hello, Galvanize!");
    }
  }
  response.statusCode = 404;
  response.end;
})

server.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`)
})