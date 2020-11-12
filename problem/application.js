const Calculator = require("./calculator");

let calc = new Calculator();
let hi;
calc.add(5);
calc.subtract(100);
calc.add(150);
calc.multiplyBy(-5);
calc.divideBy(.5);
console.log(calc.toString());
calc.resetHistory();
console.log(' ');
calc.add(50);
calc.add(100);
console.log(calc.getLastAction());
calc.add('p');