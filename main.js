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

