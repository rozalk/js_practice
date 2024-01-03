//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

const value1 = Number(prompt("First Number?"));
const value2 = Number(prompt("Second Number?"));

if (value1 === value2) {
  const sum = 3 * (value1 + value2);
  alert("The triple sum is " + sum);
} else {
  const add = value1 + value2;
  alert("The sum is " + add);
}
