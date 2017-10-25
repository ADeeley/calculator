window.onload = function() {
    console.log("Test");        
    document.getElementById("buttons").addEventListener("click", updateExpression);
}

function updateExpression() {
    console.log("Update Expr");
    var input = event.target;
    console.log(input.tagName);
    if (input.tagName == "BUTTON") {
        document.getElementById("screen").value += event.target.innerHTML; 
    }
};

