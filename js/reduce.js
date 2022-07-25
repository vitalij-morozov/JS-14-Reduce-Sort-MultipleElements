"use strict";

import { users, students } from "./students.js";

const nums = [1, 2, 3, 4];

let total = 0;

nums.forEach((num) => (total += num));

console.log("total ===", total);

// Array Reduce Method

console.group("reduceNums");
const reducedNums = nums.reduce((total, num) => {
  return total + num;
}, 0);

console.log("reducedNums ===", reducedNums);
console.groupEnd();

const avgNums = nums.reduce((total, num, i, arr) => {
  return total + num / arr.length;
}, 0);

console.log("avgNums  ===", avgNums);

const usersExpAvg = users.reduce(
  (res, uObj, i, uArr) => res + uObj.exp / uArr.length,
  0
);

console.log("userssExpAvg ===", usersExpAvg);

const studentsAgeAvg = students
  .reduce((total, sObj, i, sArr) => total + sObj.age / sArr.length, 0)
  .toFixed(2);
console.log("Students Age Avg ===", studentsAgeAvg);

function maleFemales(array) {
  const result = { males: [], females: [] };
  let reduced = array.reduce((total, sObj) => {
    sObj.gender === "male"
      ? total.males.push("male")
      : total.females.push("female");
    return total;
  }, result);
  const genderCount = {
    male: reduced.males.length,
    female: reduced.females.length,
  };
  return [reduced, genderCount];
}

console.log("maleFemales(array) ===", maleFemales(students));
