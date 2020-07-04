const addANumber = require("./another");
const express = require("express");

var name = "nikho";

let lastName = "sagala";

const age = 25;

// console.log(name);
// console.log(lastName);
// console.log(age);

name = "another name";

lastName = "another";

console.log(addANumber(10));
// age = 25;

// console.log(lastName);
// console.log(age);

// function
function printMyName(name) {
  console.log(name);
}

// arrow function // anonymous function
const printMyNameAgain = (name) => {
  console.log(name);
};

const theFunctionName = (theArguments) => {
  // function body
};

const sum = (a, b) => {
  return a + b;
};

let numbers = [10, 11, 23, 38];

// console.log(sum(2, 2));

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  //   console.log(element);
}

console.log();

let total = 0;

function printMyNumber(number) {
  total += number;
  return total;
}

numbers.forEach(printMyNumber);

// console.log(total);

// printMyName("nikho");
// printMyNameAgain("nikho");
