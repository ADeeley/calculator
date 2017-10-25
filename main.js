function Operators() {
    var symbols = {
        "-" : 0,
        "+" : 1,
        "*" : 2, 
        "/" : 3
    }

    this.isOperator = function(val) {
        /**
         * Returns true if argument is an operator.
         */
        if (!symbols[val]) {
            return false;
        }
        else {
            return true;
        }
    }

    this.getPriority = function(val) {
        /** 
         * Returns the priority of the argument as an int.
         */
        return symbols[val];
    }
}

function exprStrToArr(str) {
    /**
     * returns an array of numbers and operators.
     */
    var expressionArr = [];
    var symbol = "";
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "/":
            case "*":
            case "+":
            case "-":
                expressionArr.push(symbol);
                symbol = "";
                expressionArr.push(str[i]);
                break;
            default:
                symbol += str[i];
                break;
        }
    }
    // Push the last symbol to the array
    expressionArr.push(symbol);

    return expressionArr;
}

window.onload = function() {
    var ops = new Operators();
    console.log(exprStrToArr("12*4+8-89/34"));
    document.getElementById("buttons").addEventListener("click", detectButton);
}


function updateExpression(val) {
    /**
     * Updates the expression string in the input screen with the value
     * of the button pressed
     */
    document.getElementById("screen").value += val; 
}

function calculate(expr) {
    /**
     * Calculates the expression and returns the result to the input
     * screen.
     */

}

function clear() {
    /**
     * Clears the whole input.
     */
    document.getElementById("screen").value = "";
    console.log("Clear called");
}

function clearEntry() {
    /**
     * Clears the last entry.
     */
    console.log("Clear Entry called");
}

function detectButton() {
    /**
     * Checks which button was pressed and routes the event to the
     * appropriate function.
     */
    var input = event.target;
    if (input.tagName == "BUTTON") {
        switch (input.innerHTML) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
            case "/":
            case "*":
            case "+":
            case "-":
            case ".":
                updateExpression(input.innerHTML);
                console.log("Test");
                break;
            case "=":
                calculate(document.getElementById("screen").value);
                break;
            case "C":
                clear();
                break;
            case "CE":
                clearEntry();
                break;
        }
    }
};



