const Router = require("koa-router");
const router = new Router();

const postRoute = require("../api/postRoute");
const basic = require("../api/basic");
const getName = require("../api/getName");

router.get("/", basic);
router.get("/getName", getName);

router.post("/postRoute", postRoute);

module.exports = (app) => {
  app.use(router.routes()).use(router.allowedMethods());
};
