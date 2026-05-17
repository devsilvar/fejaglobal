// Vercel Node.js Serverless Function Entry for TanStack Start SSR
const server = require("./dist/server/server.js").default;

module.exports = async function(req, res) {
  try {
    // For Vercel serverless, we need to adapt the request
    const url = req.url || "/";
    const method = req.method || "GET";

    const request = new Request(url, {
      method,
      headers: req.headers,
    });

    const response = await server.fetch(request);

    // Forward response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Forward response body
    const body = await response.text();
    res.statusCode = response.status;
    res.send(body);
  } catch (error) {
    console.error("SSR Error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.send(`<html><body><h1>Server Error</h1><pre>${error.message}</pre></body></html>`);
  }
};