"use strict";

// Label
const grid = document.querySelector(".calculator-grid");

const output = document.querySelector(".output");
console.log(output);

const preValue = document.querySelector(".previous-operand");
console.log(preValue);
const currentValue = document.querySelector(".current-operand");
console.log(currentValue);

const clear_equal = document.querySelectorAll(".span-two");
console.log(clear_equal);

//Screen

// same class name
for (let i = 0; i < clear_equal.length; i++)
  clear_equal[i].addEventListener("click", function () {
    console.log("Clicked");
  });
