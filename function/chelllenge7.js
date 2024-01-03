//Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.

const number = Number(prompt("Enter any number")); //prompt from user...

const squareNumber = (num) => {
  //arrow function...
  return num * num;
};

const result = squareNumber(number); //function call..
alert(`Square of given number is : ${result}`);
