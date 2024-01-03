//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const value = Number(prompt("Enter a positive number?"));

const isNum = !isNaN(value);
// (value >= 65 && value <= 90) || (value >= 97 && value <= 122);
// if (!isNum) {
//   alert("Enter a number");
// } else {
if (value > 0) {
  if (value % 3 === 0 && value % 7 === 0) {
    alert("Number is multiple of 3 and 7");
  } else {
    if (value % 3 === 0) {
      alert("Number is multiple of 3");
    } else if (value % 7 === 0) {
      alert("Number is multiple of 7");
    } else {
      alert("Number is neither multiple of 3 and 7 ");
    }
  }
} else {
  alert("Enter a positive number");
}
//ok
