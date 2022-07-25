"use strict";

import { students, nums } from "./students.js";

// console.log("students ===", students);
// console.log("nums  ===", nums);

const sortByAge = students.slice().sort((a, b) => a.age - b.age);
const sortByGender = students.slice().sort((a, b) => {
  //   if (a.gender > b.gender) return -1;
  //   else if (b.gender > a.gender) return 1;
  //   else return 0;
  return a.gender < b.gender ? 1 : a.gender > b.gender ? -1 : 0;
});

console.log("sort by age", sortByAge);
console.log("sort by gender", sortByGender);
