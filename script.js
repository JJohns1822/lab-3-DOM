"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");

let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total:$${total}`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total:$${total}`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total:$${total}`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total:$${total}`;
});

// let penny = "penny";
// let nickel = "nickel";
// let dime = "dime";
// let quarter = "quarter";

// listen for the submission of the Form
// derive the two values from the inputs
// use the values to create the number of coins and the respective type

let moneyForm = document.querySelector(".money-form");
let moneyBox = document.querySelector(".coin-container");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let snapshot = new FormData(moneyForm);
  let amount = snapshot.get("amount");
  let type = snapshot.get("type");
  console.log(amount, type);
  for (let i = 0; i < amount; i++);
  {
    let coin = document.createElement("div");
    let coinParagraph = document.createElement("p");
    coinParagraph.innerText = type;
    coin.classList.add(type, "coin");
    coin.append(coinParagraph);
    moneyBox.append(coin);
    coin.addEventListener("click", () => {
      coin.remove();
    });
  }
  moneyForm.reset();
});

// let myDiv = document.querySelector(".my-div");
// console.dir(myDiv);

// myDiv.addEventListener("click", () => {
//   myDiv.classList.toggle("alternate");
// });

let lightON = document.querySelector(".on");
let lightBulb = document.querySelector("light-bulb")

lightON.addEventListener("submit" () => {
  lightBulb.addEventListener("click" () => {
    lightBulb.classList.toggle("alternate")
  })
}

