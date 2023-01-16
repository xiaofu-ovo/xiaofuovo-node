module.exports = function (ctx) {
  const { hello, name } = ctx.query;
  ctx.body = `<h1>${hello}, ${name}</h1>`;
};
