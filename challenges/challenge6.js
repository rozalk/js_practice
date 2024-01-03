const str = prompt("Enter a string"); //intializing variable...

const strlen = str.length; // finding lenth of string...
console.log(strlen);
let count = 0;

if (str >= 0 || str < 0) {
  //checking if user enters number...
  alert("INVALID Enter a string...");
} else {
  for (let i = 1; i <= strlen; i++) {
    //for loop to
    if (
      str[i] === "a" ||
      str[i] === "A" ||
      str[i] === "e" ||
      str[i] === "E" ||
      str[i] === "i" ||
      str[i] === "I" ||
      str[i] === "o" ||
      str[i] === "O" ||
      str[i] === "u" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  alert(`Vowels are: ${count}`);
}
//ok
