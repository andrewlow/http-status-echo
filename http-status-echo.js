// Importing the http module
const http = require("http");
// All of the HTTP status codes with descriptions
const httpStatus = require("http-status-codes");

// Creating server
const server = http.createServer((req, res) => {
  // Sending the response

  // Get the number from the URL
  httpCode = Number(req.url.substring(1));

  // Attempt to map the status code to a string
  var httpString;
  try {
    httpString = httpStatus.getReasonPhrase(httpCode);
    res.writeHead(httpCode, { "Content-Type": "text/html" });
  } catch (error) {
    httpString = "HTTP status code does not exist";
    res.writeHead(400, { "Content-Type": "text/html" });
  }

  // Log the event
  console.log(new Date().toUTCString() + " " + httpCode + " " + httpString);
  // respond with the text
  res.end(httpCode + " " + httpString);
});

// Server listening to port 3000
server.listen(3000, () => {
  console.log(new Date().toUTCString() + " Server is Running");
});
