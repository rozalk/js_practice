// Create a new Date object
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(`Current Date: ${year}-${month}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
