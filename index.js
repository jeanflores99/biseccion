const { execute, last, pointMiddle } = require("./fn");

const funcion = "5*x^3-5*x^2+6*x-2",
  xi = [0],
  xs = [1];
(iteraciones = 30), (i = 1), (xr = []), (Fxi = []), (Fxr = []), (Fxixr = []);

let raiz = 0;
const metdata = [];

const run = () => {
  let value = pointMiddle(funcion, xi, xs);
  if (value < 0) {
    while (i <= iteraciones) {
      xr.push((last(xi) + last(xs)) / 2);
      let point = pointMiddle(funcion, xi, xr);

      metdata.push({
        id: i,
        xi: last(xi),
        xs: last(xs),
        xr: last(xr),
        Fxi: execute(funcion, last(xi)),
        Fxs: execute(funcion, last(xs)),
        Fxr: execute(funcion, last(xr)),
        Fxixr: cacultatePosIntervalo(point),
        error: `${(((last(xs) - last(xi)) / last(xr)) * 100).toFixed(4)} %`,
      });
      // console.log("xi :" + i + " - " + last(xi));
      // console.log("xs :" + i + " - " + last(xs));
      // console.log("xr :" + i + " - " + last(xr));

      i++;
    }
    console.table(metdata);
    console.log("La raiz encontrada es: " + raiz);
  } else {
    console.log("no se puede resolver por este metodo");
  }
};

cacultatePosIntervalo = (point) => {
  if (point < 0) {
    xs.push(last(xr));
    return point;
  } else if (point > 0) {
    xi.push(last(xr));
    return point;
  } else if (point == 0) {
    raiz = point;
    return point;
  }
};

run();
