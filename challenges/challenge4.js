//Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)

/// Asking for prompt values...
const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid Enter number");
} else {
  // Defining arrow function...
  const multiDivi = (num1, num2) => {
    const multi = num1 * num2;
    alert(`Multiplication is ${multi}`);

    if (num2 != 0) {
      //check if it is divisible or not...
      const divi = num1 / num2;
      alert(`Division is ${divi}`);
    } else {
      alert("cannot be divided by zero");
    }
  };

  const multiDivii = multiDivi(num1, num2); //function call...
}
