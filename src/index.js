const Koa = require("koa");
const router = require("./routers");
const middleware = require("./middleware");

const app = new Koa();

// 路由
router(app);

// 中间件
middleware(app);

app.on("error", (err, ctx) => {
  log.error("server error", err, ctx);
});

app.listen(3000);

console.log("app start at port 3000...");
