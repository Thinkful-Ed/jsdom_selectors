// The following code will be executed if this file is properly connected to the HTML
console.log("Connected!");

// Write your solution code here

// 1. Select all ratings values
const ratings = document.querySelectorAll(".rating .value");
console.log(ratings);

// 2. Select all stars that are not shaded
const halfStars = document.querySelectorAll(".half");
console.log(halfStars);

// 3. Select the entire Gateway Arch park element by id
const gatewayArch = document.querySelector("#ganp");
console.log(gatewayArch);

// 4. Select the element with the established date value for Gateway Arch
const established = document.querySelector("#ganp .established .value");
console.log(established);
