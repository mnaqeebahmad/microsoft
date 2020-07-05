"use strict";

console.log("Here's a hidden messege");

//This is a single line comment
/*This is a double
line comment in js */

//Now we are displaying date on our web page

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById("date");
selectElement.innerHTML = formatDate;
