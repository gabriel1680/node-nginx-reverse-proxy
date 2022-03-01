const http = require("http");
const { notFound, serverError } = require("./core/http");
const { routes } = require("./core/routes");

const server = http.createServer((req, res) => {
  try {
    const controller = routes[req.url];
    if (typeof controller !== "function") return notFound(res);
    return controller(res);
  } catch (error) {
    console.error(error);
    return serverError(res);
  }
});

server.listen(3000, () => console.log("Server up and running"));