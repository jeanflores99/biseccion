const { evaluate } = require("mathjs");

const execute = (funcion = "x", n = "1") =>
  evaluate(
    funcion
      .split("")
      .map((a) => (a === "x" ? n : a))
      .join("")
  )

const last = (x = []) => x[x.length - 1];

const pointMiddle = (funcion, xi, xr) => {
  let tempdata = execute(funcion, last(xi)) * execute(funcion, last(xr));
  return tempdata;
};



module.exports = {
  execute,
  last,
  pointMiddle,
};
