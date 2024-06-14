//valor de year
var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
//modificaciones
document.getElementById("demo").innerHTML = new Date(document.lastModified);