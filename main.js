let a = b = null;
let evaluate = "";

const display = document.getElementById("display");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const equals = document.getElementById("equals");
const history = document.getElementById("history");

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) { 
    if (b === 0) return null;
    return a / b;
}

const operate = function (operator, a, b) {
    return operator(a,b);
}

// Number buttons populate display
const numbers = document.querySelectorAll(".number");
numbers.forEach(item => 
    item.addEventListener("click", event => {
        if (display.value == 0) {
            display.value = "";
        }
        display.value += item.innerHTML;
    }));

// Clear sets display to 0
const clear = document.getElementById("clear");
clear.addEventListener("click", event => {
    a = b = displayValue = display.value = 0;
});

// Each operator button 
const operators = document.querySelectorAll(".operator")
operators.forEach(item => 
    item.addEventListener("click", event => {
        // a = parseInt(display.value);
        // evaluate = item.id;
        // display.placeholder = `${a} ${item.innerHTML}`
        // display.value = 0;
        a = parseInt(display.value);
        evaluate = item.id;
        display.value = 0;
        history.textContent = `${a} ${item.innerHTML}`
    }));


equals.addEventListener("click", event => {
    b = parseInt(display.value)
    display.value = operate(eval(evaluate), a, b);
})