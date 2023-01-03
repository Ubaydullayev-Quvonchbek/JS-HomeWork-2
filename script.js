document.querySelector("body").style.backgroundColor = "#3e3e3e";

let day = prompt("Kunni kiriting");
let week = day / 7;
let month = day / 30;
let year = day / 365;

alert(day + " kunda " + week.toFixed(0) + " hafta " + month.toFixed(0) + " oy " + year.toFixed(0) + " yil bor");