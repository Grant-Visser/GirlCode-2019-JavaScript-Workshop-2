// Select the Title and Subtitle from the HTML file
let title = document.getElementsByClassName("card-title");
let subtitle = document.getElementById("subtitle");

//Use console.log to print their values to the console
console.log(title[0].innerHTML);
console.log(subtitle.innerHTML);

// Use innerHTML to modify their content
title[0].innerHTML = "Changed Title";
subtitle.innerHTML = "Changed Subtitle"

// https://www.w3schools.com/js/js_output.asp