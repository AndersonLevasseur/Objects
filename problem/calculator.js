// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
class Calculator {
	constructor() {
		this.currentValue = 0;
		this.history = [];

		//put the current value into the history using an array operation
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	}

	// Adds the value in the parameter to the currentValue

	add(number) {
		if (typeof (number) != 'number') {
			throw 'Not a valid Input';
		} else {
			let oldValue = this.currentValue;
			this.currentValue += number;
			let equation = oldValue + ' + ' + number + ' = ' + this.currentValue;
			this.history.push(equation);
			return this.currentValue;
		}
		//if the parameter isn't a number, throw an error
		//add the parameter to the currentValue
		//add a row to the history array describing the operation in the format "oldValue + valueToAdd = result"
		//return the resulting value
	}
	
	//subtracts the value in the parameter from the current value
	subtract(number) {
		if (typeof (number) != 'number') {
			throw 'Not a valid Input';
		} else {
			let oldValue = this.currentValue;
			this.currentValue -= number;
			let equation = oldValue + ' - ' + number + ' = ' + this.currentValue;
			this.history.push(equation);
			return this.currentValue;
		}
	}
	
	multiplyBy(number) {
		if (typeof (number) != 'number') {
			throw 'Not a valid Input';
		} else {
			let oldValue = this.currentValue;
			this.currentValue *= number;
			let equation = oldValue + ' x ' + number + ' = ' + this.currentValue;
			this.history.push(equation);
			return this.currentValue;
		}
	}

	
	divideBy(number) {	
	if (typeof (number) != 'number') {
		throw 'Not a valid Input';
	} else {
		let oldValue = this.currentValue;
		this.currentValue /= number;
		let equation = oldValue + '/' + number + ' = ' + this.currentValue;
		this.history.push(equation);
		return this.currentValue;
		}
	}
	
	//returns the current value stored in the calculator
	getValue() {
		return this.currentValue;
	}
	
	setCurrentValue(number) {
		if (typeof (number) != 'number') {
			throw 'Not a valid Input';
		} else {
			this.currentValue = number;	
		}
	}
	
	clearValue() {
		this.currentValue = 0;
		this.history.push('Cleared');		
	}	
	//Create a clear method that resets the current value in the calculator to zero and stores that action in history
	//fill me in
	
	resetHistory() {
		this.history.splice(0,this.history.length);
		this.history.push('History Cleared');
	}
	//Create a method to clear all the history from the history array
	//fill me in
	getLastAction() {
		let recentHistory = this.history[this.history.length - 1];
		if (this.history.length = 0) {
			throw 'No History';
		} else {
			return recentHistory;
		}
	}

	//Create a method to get the most recent history item from the history array
	//fill me in
	
	//returns all actions in the history array as a single string
	//each action should be separated by a new line '\n'. There's a really good way to do this using one of the
	//built in array operations
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	toString() {
		return this.history.join('\n');
	}
}
module.exports = Calculator;