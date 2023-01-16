module.exports = function () {
  return async function (ctx, next) {
    await next();

    const rt = ctx.response.get("X-Response-Time");
    console.log(`log => ${ctx.method} ${ctx.url} - ${rt}`);
  };
};
