const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const displayContainer = document.querySelector(".display-container");
const currentOp = document.querySelector(".current-op");
const previousOp = document.querySelector(".previous-op");
const enterBtn = document.querySelector(".enter-btn");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");
let displayValue = "";


btn.forEach((button) => {
    button.addEventListener("click", displayVal);
})


enterBtn.addEventListener("click", operate);

clearBtn.addEventListener("click", clear);

deleteBtn.addEventListener("click", deleteButton);


function displayVal(button) {
    displayContainer.style.height = "auto";
    displayValue = displayValue + button.target.textContent;
    currentOp.textContent = displayValue;
}


function operate() {

    const result = eval(displayValue);
    previousOp.textContent = result;
    displayValue = "";
    currentOp.textContent = "0";
}

function clear() {
    displayValue = "";
    currentOp.textContent = "0";
    previousOp.textContent = "";
}

function deleteButton() {

    console.log(displayValue.length);
    if (displayValue.length == 1 || currentOp.textContent == "0") {
        displayValue = "";
        currentOp.textContent = "0";
        // previousOp.textContent = "";
    } else {
        displayValue = displayValue.slice(0, displayValue.length - 1);
        currentOp.textContent = displayValue;
        console.log(displayValue);
    }
}