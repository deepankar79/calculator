"use strict";
let userInput,
  opr1,
  userInput2 = "",
  answer;
let fno = 0;
let sno = 0;
let arr = [];
let display = document.getElementById("dsp");
const buttons = document.querySelectorAll(".btn");

//function to store numbers
const userSelect = function (userInput) {
  arr.push(userInput);
  console.log(arr);
};

//functions for math operators
const operator = function (userInput) {
  userInput2 = userInput;
  console.log(userInput2);
  if (fno === 0) {
    fno = Number(arr.join(""));
    arr = [];
    return;
  } else {
    sno = Number(arr.join(""));
  }
  if (fno !== 0 && sno !== 0)
};

//function for result
const result = function () {
  arr = [];
  if (userInput2 === "+") answer = fno + sno;
  else if (userInput2 === "-") answer = fno - sno;
  else if (userInput2 === "/") answer = fno / sno;
  else if (userInput2 === "*") answer = fno * sno;
  else if (userInput2 === "%") answer = fno % sno;

  fno = answer;
  return answer;
};

const clean = function (userInput) {
  if (userInput === "AC") {
    fno = sno = 0;
    display.textContent = "0";
    arr = [];
    return;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    userInput = e.target.innerText;
    if (e.target.classList.contains("digits")) userSelect(userInput);
    else if (e.target.classList.contains("operation")) operator(userInput);
    else if (e.target.classList.contains("clear")) clean(userInput);
    else if (e.target.classList.contains("result")) {
      answer = result();
      display.textContent = `${answer}`;
    }
  })
);
