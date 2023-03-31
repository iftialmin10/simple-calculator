// Label
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

let activeOperator = '';

// Function
const checkLeadingPosition = val => {
  val.charAt(0) === '0'
    ? (currentValue.textContent = val.slice(1))
    : (currentValue.textContent = val);
};

// Event handler
ac.addEventListener('click', function () {
  console.log('ac');
  preValue.textContent = '';
  currentValue.textContent = '0';
});

del.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent.toString().slice(0, -1);
  console.log('del');
});

num0.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '0';
  checkLeadingPosition(currentValue.textContent);
  console.log('num0');
});

num1.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '1';
  checkLeadingPosition(currentValue.textContent);
  console.log('num1');
});

num2.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '2';
  checkLeadingPosition(currentValue.textContent);
  console.log('num2');
});

num3.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '3';
  checkLeadingPosition(currentValue.textContent);
  console.log('num3');
});

num4.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '4';
  checkLeadingPosition(currentValue.textContent);
  console.log('num4');
});

num5.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '5';
  checkLeadingPosition(currentValue.textContent);
  console.log('num5');
});

num6.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '6';
  checkLeadingPosition(currentValue.textContent);
  console.log('num6');
});

num7.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '7';
  checkLeadingPosition(currentValue.textContent);
  console.log('num7');
});

num8.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '8';
  checkLeadingPosition(currentValue.textContent);
  console.log('num8');
});

num9.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '9';
  checkLeadingPosition(currentValue.textContent);
  console.log('num9');
});

div.addEventListener('click', function () {
  preValue.textContent = currentValue.textContent + '÷';
  currentValue.textContent = '0';
  console.log('div');
});

multi.addEventListener('click', function () {
  preValue.textContent = currentValue.textContent + '*';
  currentValue.textContent = '0';
  console.log('multi');
});

add.addEventListener('click', function () {
  preValue.textContent = currentValue.textContent + '+';
  currentValue.textContent = '0';
  console.log('add');
});

sub.addEventListener('click', function () {
  preValue.textContent = currentValue.textContent + '-';
  currentValue.textContent = '0';
  activeOperator = '-';
  console.log('sub');
});

dec.addEventListener('click', function () {
  currentValue.textContent = currentValue.textContent + '.';
  console.log('dec');
});

eql.addEventListener('click', function () {
  console.log('eql');
});

// hard coded something in screen
currentValue.textContent = '0';
preValue.textContent = '';
