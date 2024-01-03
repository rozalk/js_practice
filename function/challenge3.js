//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

const number = Number(prompt("Enter any number"));

if (number > 0) {
  //number check if negative number and string is entered...

  const checkPrime = (number) => {
    //arrow functions...

    for (let i = 2; i < number; i++) {
      //iterations starts from 2 cause prime number can be divisible by only 1 and itself...

      if (number % i === 0) {
        alert("Not a prime number");
        return; //exits from function...
      }
    }
    alert("Prime number");
  };

  const result = checkPrime(number); //function call...
} else {
  alert("Enter a positive number"); //number is either string or negative...
}
