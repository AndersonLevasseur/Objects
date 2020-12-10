## Work Assignment
### Fill in the js class called "Calculator" in the calculator.js file
* This class should have the following properties:
    * Current value : Number (defaults to zero) - This should contain the currently calculated number
    * History - This is an array of strings. Each string shows the calculation that was performed and the resulting new current value.
* In this class, provide the following functions:
    * add
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Adds the received parameter to the currentValue
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * subtract
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Subtracts the received parameter from the currentValue
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * divideBy
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Divides the current value by the received parameter
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * multiplyBy
        * Checks the incoming parameter to ensure it's valid and throws an exception if it is not
        * Multiplies the current value by the received parameter
        * Adds a record to the history array showing what occurred
        * Returns the new current value
    * getValue
        * Returns the current value
    * clear
        * Resets the current value to zero
        * Adds a record to the history array stating "Current Value Cleared"
    * resetHistory
        * Clears the current history array
    * getLastAction
        * Gets the most recent action from the history array
    * toString
        * Returns a string containing all items from the history array separated by line breaks (line breaks in JS can be denoted using '\n')
### Fill in the js file named application.js
* Create a new instance of the calculator object
* Using the calculator object, perform the following actions:
    * Add 5
    * Subtract 100
    * Add 150
    * Multiply by -5
    * Divide by .5
    * Show the entire history up to this point
    * Clear the history
    * Send a blank line to the console
    * Add 50
    * Add 100
    * Show the most recent transaction
    * Attempt to add a letter and see the result

    ## Reading Assignment
* Skim over this link for 5 minutes or so [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * This is the best resource I know of for all things JavaScript
    * It's extremely extensive, learning it all would take a very long time. Just be aware of its existence.
* Review the style guide here [w3 schools style guide](https://www.w3schools.com/js/js_conventions.asp)
    * It's not nearly the best or most comprehensive but gives some good highlights
* Review the Console methods found here [Console - MDN](https://developer.mozilla.org/en-US/docs/Web/API/console), they'll come in handy when you're working