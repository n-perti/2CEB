const math = require('./math');
const {sumar, restar} = require('./math'); //option to import only the functions you need
console.log(math.sumar(1, 2));
console.log(math.restar(1, 2));
console.log(math.multiplicar(1, 2));
console.log(math.dividir(1, 2));

console.log(sumar(1, 2));
console.log(restar(1, 2));
