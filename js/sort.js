"use strict";
console.log("main");

const nums = [-50, 14, 0, 24, 100, -45];

// Sort an array both ways
const sortedAZ = nums.slice().sort((a, b) => a - b);
const sortedZA = nums.slice().sort((a, b) => b - a);

// console.log("sortedAZ ===", sortedAZ);
// console.log("sortedZA ===", sortedZA);

// Show div

const appEl = document.getElementById("app");

function addToHTML(title, array, dest) {
  const pEl = document.createElement("p");
  pEl.textContent = title + array.join(" ");
  dest.append(pEl);
}

addToHTML(`Sorted Z - A array: `, sortedZA, appEl);
addToHTML(`Original array: `, nums, appEl);

const sortBtn = document.getElementById("btn");

const pEl = document.createElement("p");
pEl.textContent = `Original array: ` + nums.join(" ");
appEl.append(pEl);

let counter = 0;
sortBtn.addEventListener("click", () => {
  if (counter === 0) {
    pEl.textContent = `Original array: ` + nums.join(" ");
    counter++;
  } else if (counter === 1) {
    pEl.textContent =
      `Sorted array A-Z: ` + nums.sort((a, b) => a - b).join(" ");
    counter++;
  } else if (counter === 2) {
    pEl.textContent =
      `Sorted array Z-A: ` + nums.sort((a, b) => b - a).join(" ");
    counter = 0;
  }
});

function printArrInApp(title, arr) {
  const appEl = document.getElementById("app");
  const pEl = document.createElement("p");
  let resultString = title + `: [`;
  pEl.append(title, `: [`);

  const elString = arr.map((el) => `${el}, `).join(", ");

  resultString += elString;
  resultString += ` ]`;
  pEl.append(resultString);
  appEl.append(pEl);
}

sortBtn.addEventListener("click", () => {
  printArrInApp("Original", nums);
  // const pEl = document.querySelector('#app p:last-child');
  //   const pEl = appEl.firstElementChild;
  const pEl = appEl.querySelector("p");
  pEl.textContent = sortedAZ.sort((a, b) => a - b).join(", ");
});
