function Operators() {
    var symbols = {
        "-" : 1,
        "+" : 2,
        "*" : 3, 
        "/" : 4
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

   this.locateHighestPriority = function(expr) {
       /**
        * Returns the index of the highest priority operator
        * in the given equation.
        */
        console.log(expr);
        var candidate;
        var currentHighest;
        var highestPriority = -1;

        for (var i = 0; i < expr.length; i++) {
            // Make the first operator the highest initially
            if (ops.isOperator(expr[i])) {
                if (highestPriority == -1) {
                    highestPriority = i;
                }
                else {
                    // Compare the operator's priorities
                    candidate = ops.getPriority(expr[i]);
                    currentHighest = ops.getPriority(expr[highestPriority]);
                    if (candidate > currentHighest) {
                        highestPriority = i;
                    }
                }
            }
        }
       return highestPriority;
    }
}

// Instantiate operators for global use
var ops = new Operators();

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
    var highestPriority = ops.locateHighestPriority(expr);

    console.log("HighestPriority: " + highestPriority);
    console.log("ExprSection: " + exprSection);
    // If no operators remain
    if (highestPriority == -1 || expr.length <= 1) {
        document.getElementById("screen").value = expr;
        return;
    }
    // Resolve the highest priority operator
    else {
        var exprSection = expr.splice(highestPriority - 1, 3) 
        var a = parseInt(exprSection[0]);
        var b = parseInt(exprSection[2]);
        var result = 0;

        switch(exprSection[1]) {
            case "/":
                result = a / b;
                break;
            case "*":
                result = a * b;
                break;
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
        }
        console.log("Final: " + result);
    }
    // Add result back to the expr
    expr.splice(highestPriority - 1, 0, String(result));
    console.log(expr);
    // return recursively
    calculate(expr);

}

function clear() {
    /**
     * Clears the whole input.
     */
    var input = document.getElementById("screen");
    input.value = "";
    input.placeholder = "0";
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
                break;
            case "=":
                // Convert to array and calculate
                var strExpr = document.getElementById("screen").value;
                var arrExpr = exprStrToArr(strExpr);
                calculate(arrExpr);
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
