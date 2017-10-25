window.onload = function() {
    console.log("Test");        
    document.getElementById("buttons").addEventListener("click", detectButton);
}

function updateExpression(val) {
    document.getElementById("screen").value += val; 
}

function calculate() {
    console.log("Calculate called");
}

function clear() {
    console.log("Clear called");
}

function clearEntry() {
    console.log("Clear Entry called");
}

function detectButton() {
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



