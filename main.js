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
    return a / b;
}

const operate = function (operator, a, b) {
    return operator(a,b);
}

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number").forEach(item => 
    item.addEventListener("click", event => {
        display.value += item.innerHTML;
    }));

const clear = document.getElementById("clear");
clear.addEventListener("click", event => {
    display.value = null;
});

let displayValue = 0;

// 1st num = a, 2nd = b, press equals calls operate(a,b)

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const equals = document.getElementById("equals");

let a = b = 0;

// addBtn.addEventListener("click", event => {
//     a = parseInt(display.value);
    
// })

const operators = document.querySelectorAll(".operator").forEach(item => 
    item.addEventListener("click", event => {
        a = parseInt(display.value);
        let operator = item.id;
        console.log(operator)
        display.value = null;
        b = parseInt(display.value);
        console.log(a,b)
        display.value = operate(operator, a, b);
    }));

    