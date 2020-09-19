let http = require("http");

http.createServer(function (request, response) {
    response.write("<h1>Welcome to node server</h1><button>Submit</button>")
    response.end();
}).listen(5000);