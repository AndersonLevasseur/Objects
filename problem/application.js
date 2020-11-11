const Calculator = require("./calculator");

let calc = new Calculator();
let hi 
calc.getValue();
calc.add(hi);
calc.setCurrentValue(9);
calc.getValue();
console.log(' ');
calc.add('Please dont work');
calc.clearValue();
calc.getValue();
calc.add(9);
calc.getRecentHistory();
console.log('');

calc.clearValue();
calc.getRecentHistory();
calc.toString();
console.log('');
calc.subtract(9);
calc.multiplyBy(92);
calc.divideBy(92);
calc.getRecentHistory();
calc.multiplyBy(12);
calc.toString();
