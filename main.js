window.onload = function() {
    console.log("Test");        
    document.getElementById("buttons").addEventListener("click", detectButton);
}

function updateExpression(val) {
    /**
     * Updates the expression string in the input screen with the value
     * of the button pressed
     */
    document.getElementById("screen").value += val; 
}

function calculate() {
    /**
     * Calculates the expression and returns the result to the input
     * screen.
     */
    console.log("Calculate called");
}

function clear() {
    /**
     * Clears the whole input.
     */
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
                calculate();
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



