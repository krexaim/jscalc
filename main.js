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

const display = document.getElementById("display");


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
    display.value = 0;
});

let displayValue = 0;

// 1st num = a, 2nd = b, press equals calls operate(a,b)

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const equals = document.getElementById("equals");

let a = b = 0;
let evaluate = "";

const operators = document.querySelectorAll(".operator")
operators.forEach(item => 
    item.addEventListener("click", event => {
        // a = parseInt(display.value);
        // evaluate = item.id;
        // display.placeholder = `${a} ${item.innerHTML}`
        // display.value = 0;
        a = parseInt(display.value);
        evaluate = item.id;
        
    }));

equals.addEventListener("click", event => {
    b = parseInt(display.value)
    display.value = operate(eval(evaluate), a, b);
})

