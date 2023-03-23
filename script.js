'use strict';

// Label
const grid = document.querySelector('.calculator-grid');

const output = document.querySelector('.output');

const preValue = document.querySelector('.previous-operand');
const currentValue = document.querySelector('.current-operand');

const ac = document.querySelector('.span-AC');
const del = document.querySelector('.span-Del');

const num0 = document.querySelector('.span-0');
const num1 = document.querySelector('.span-1');
const num2 = document.querySelector('.span-2');
const num3 = document.querySelector('.span-3');
const num4 = document.querySelector('.span-4');
const num5 = document.querySelector('.span-5');
const num6 = document.querySelector('.span-6');
const num7 = document.querySelector('.span-7');
const num8 = document.querySelector('.span-8');
const num9 = document.querySelector('.span-9');

const div = document.querySelector('.span-divide');
const multi = document.querySelector('.span-multi');
const add = document.querySelector('.span-add');
const sub = document.querySelector('.span-sub');

const dec = document.querySelector('.span-deci');

const eql = document.querySelector('.span-eq');

//Screen

// same class name
// for (let i = 0; i < clear_equal.length; i++)
//   clear_equal[i].addEventListener("click", function () {
//     console.log("Clicked");
//   });

let a = ''; // for number input

ac.addEventListener('click', function () {
  console.log('ac');
  output.textContent = '0';
});

del.addEventListener('click', function () {
  console.log('del');
});

num0.addEventListener('click', function () {
  output.textContent = '0';

  //
  const val = 0;
  a = output.textContent = a.concat(val);
  console.log('num0');
});

num1.addEventListener('click', function () {
  output.textContent = '1';

  //
  const val = 1;
  a = output.textContent = a.concat(val);
  console.log('num1');
});

num2.addEventListener('click', function () {
  output.textContent = '2';

  //
  const val = 2;
  a = output.textContent = a.concat(val);
  console.log('num2');
});

num3.addEventListener('click', function () {
  output.textContent = '3';

  //
  const val = 3;
  a = output.textContent = a.concat(val);
  console.log('num3');
});

num4.addEventListener('click', function () {
  output.textContent = '4';

  //
  const val = 4;
  a = output.textContent = a.concat(val);
  console.log('num4');
});

num5.addEventListener('click', function () {
  output.textContent = '5';

  //
  const val = 5;
  a = output.textContent = a.concat(val);
  console.log('num5');
});

num6.addEventListener('click', function () {
  output.textContent = '6';

  //
  const val = 6;
  a = output.textContent = a.concat(val);
  console.log('num6');
});

num7.addEventListener('click', function () {
  output.textContent = '7';

  //
  const val = 7;
  a = output.textContent = a.concat(val);
  console.log('num7');
});

num8.addEventListener('click', function () {
  output.textContent = '8';

  //
  const val = 8;
  a = output.textContent = a.concat(val);
  console.log('num8');
});

num9.addEventListener('click', function () {
  output.textContent = '9';

  //
  const val = 9;
  a = output.textContent = a.concat(val);
  console.log('num9');
});

div.addEventListener('click', function () {
  console.log('div');
});

multi.addEventListener('click', function () {
  console.log('multi');
});

add.addEventListener('click', function () {
  console.log('add');
});

sub.addEventListener('click', function () {
  console.log('sub');
});

dec.addEventListener('click', function () {
  output.textContent = '.';

  //
  const val = '.';
  a = output.textContent = a.concat(val);
  console.log('dec');
});

eql.addEventListener('click', function () {
  console.log('eql');
});

// hard coded something in screen
output.textContent = '123.456';
