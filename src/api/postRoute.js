module.exports = (ctx) => {
  const rb = ctx.request.body;
  console.log("rb", rb);
  ctx.response.body = {
    errno: 0,
    errmsg: "success",
    data: {
      haha: 1,
    },
  };
};
