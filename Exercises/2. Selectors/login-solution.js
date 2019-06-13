let title = document.getElementsByClassName("card-title");
let subtitle = document.getElementById("subtitle");

console.log(title[0].innerHTML);
console.log(subtitle.innerHTML);

title[0].innerHTML = "Changed Title";
subtitle.innerHTML = "Changed Subtitle"

// https://www.w3schools.com/js/js_output.asp