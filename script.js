"use strict";

const challengeOne = document.querySelector(".one");
const totalParagraph = document.querySelector(".total-paragraph");
const form = document.querySelector(".two form");
const bank = document.querySelector(".bank");
// const sodaButton = document.querySelector(".soda");
// const peanutButton = document.querySelector(".peanuts");
// const barButton = document.querySelector(".bar");
// const gummyButton = document.querySelector(".gummies");
const snackButtons = document.querySelectorAll(".snack-button");
const makeMoney = document.querySelector(".make-money");
let total = 0;

// console.dir(totalParagraph);

// sodaButton.addEventListener("click", (e) => {
//   total += 2;
//   totalParagraph.textContent = `Total:$${total.toFixed(2)}`;
// });

// peanutButton.addEventListener("click", (e) => {
//   total += 3;
//   totalParagraph.textContent = `Total:$${total.toFixed(2)}`;
// });

// barButton.addEventListener("click", (e) => {
//   total += 4;
//   totalParagraph.textContent = `Total:$${total.toFixed(2)}`;
// });

// gummyButton.addEventListener("click", (e) => {
//   total += 6;
//   totalParagraph.textContent = `Total:$${total.toFixed(2)}`;
// });

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    total += parseInt(cost);
    console.log(total);
    totalParagraph.textContent = `Total:$${total.toFixed(2)}`;
  });
});

// Part Two

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#which-coin").value;
  console.log(howMany, whichCoin);
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});

// Part 3

const lightBulb = document.querySelector(".light-bulb");
const onButton = document.querySelector(".onButton");
const offButton = document.querySelector(".offButton");
const toggleButton = document.querySelector(".toggleButton");
const endButton = document.querySelector(".endButton");
const allButtons = document.getElementsByClassName("bulb-button");

const turnOn = onButton.addEventListener("click", (e) => {
  e.preventDefault();
  lightBulb.classList.add("on");
});

const turnoff = offButton.addEventListener("click", (e) => {
  e.preventDefault();
  lightBulb.classList.remove("on");
});

const toggler = toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  lightBulb.classList.toggle("on");
});

const ender = endButton.addEventListener("click", (e) => {
  e.preventDefault();
  lightBulb.remove();
  const allButtons = document.querySelectorAll(".bulb-button");
  allButtons.forEach((elem) => {
    elem.disabled = true;
  });
});

console.dir(endButton);
