const { indexController, overviewController } = require("./controllers");

const routes = {
  "/": indexController,
  "/overview": overviewController
};

module.exports = { routes };