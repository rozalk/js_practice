//Write a JavaScript function that reverses a number...

const number = Number(prompt("Enter any number"));

if (number > 0) {
  //checking for positive number...
  const reverseNumber = (number) => {
    //arrow function...
    let reversedNum = 0; //initializing variable ES6...
    //console.log(reverseNum);
    while (number > 0) {
      const unit = number % 10;
      reversedNum = reversedNum * 10 + unit;
      number = parseInt(number / 10); //parseInt or Math.floor for integer value only...
    }
    return reversedNum; //return its value to result...
  };
  const result = reverseNumber(number); //calling function...
  alert(`Reversed Number is: ${result}`);
  console.log(result);
  //this is only used for displaying in console it is not neceesary...
} else {
  alert("Enter a positive number"); //alert message for negative or string...
}

//SIR METHOD...

const reverse = (num) => {
  const data = String(num);
  const lengthOfData = data.length; //new
  let temp = "";
  for (let i = lengthOfData - 1; i >= 0; i--) {
    temp += data[i]; //new
  }
  return temp;
};
console.log(reverse(213151));
