const logger = require("./logger");
const responseTime = require("./responseTime");

module.exports = (app) => {
  app.use(logger()).use(responseTime());

  app.use(async function (ctx, next) {
    await next();
  });
};
