
const express = require("express");

const { indexController, overviewController } = require("./core/controllers");
const { notFound, serverError } = require("./core/http");

const server = express();

server.get("/", async (req, res) => await indexController(res));
server.get("/overview", (req, res) => overviewController(res));

server.use(notFound);

server.use(serverError);

server.listen(3000, () => console.log("Server up and running"));