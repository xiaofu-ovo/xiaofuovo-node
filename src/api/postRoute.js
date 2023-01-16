module.exports = (ctx) => {
  const rb = ctx.request.body;
  console.log(rb);
  ctx.response.body = {
    errno: 0,
    errmsg: "success",
    data: {
      haha: 1,
    },
  };
};
