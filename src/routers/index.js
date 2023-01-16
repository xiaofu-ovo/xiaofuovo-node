const Router = require("koa-router");
const bodyParser = require('koa-bodyparser')
const router = new Router();

const postRoute = require("../api/postRoute");
const basic = require("../api/basic");
const getName = require("../api/getName");

router.prefix("/api");

router.get("/", basic);
router.get("/getName", getName);

router.post("/postRoute", postRoute);

module.exports = (app) => {
  app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
};
