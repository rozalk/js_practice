//Making calculator...
const value1 = Number(prompt("Enter the first value"));
const value2 = Number(prompt("Enter thr second value"));
const operator = prompt("Enter what calculation you want to make ");
// for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//   for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
//     alert("USE NUMBER ONLY!!!");
//   }
// }
// if (value1 >= 97 && value1 <= 122) {//edge case:handled before the core function is executed..
//   alert("USE NUMBER");
// }
const numCheck1 = [num1.charcodeAt() >= 65 && num1.charcodeAt() <= 90];
const numCheck1 = [num1.charcodeAt() >= 97 && num1.charcodeAt() <= 122];

const numCheck2 = [num2.charcodeAt() >= 65 && num2.charcodeAt() <= 90];
const numCheck2 = [num2.charcodeAt() >= 97 && num2.charcodeAt() <= 122];
if (numCheck1 || numCheck2) {
  alert("TYPE NUMBER");
}

if (isNaN(value1) && isNaN(value2)) {
  alert("NOT A NUMBER");
} else {
  switch (operator) {
    case "+":
      alert(value1 + value2);
      break;

    case "-":
      alert(value1 - value2);
      break;

    case "*":
      alert(value1 * value2);
      break;

    case "/":
      alert(value1 / value2);
      break;

    default:
      alert("INVALID OPERATOR !!!");
      break;
  }
}
