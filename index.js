const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const min = new Date();
let months = month[min.getMonth()];
let day = min.getDate();
let year = min.getFullYear();

document.querySelector('#date').innerHTML = months + " " + day + "," + " " + year;
document.querySelector('#date2').innerHTML = months + " " + day + "," + " " + year;
document.querySelector('#date3').innerHTML = months + " " + day + "," + " " + year;
document.querySelector('#date4').innerHTML = months + " " + day + "," + " " + year;
//Get day


document.getElementById("min").innerHTML = min.getMinutes() + " " + "mins";
document.getElementById("min2").innerHTML = min.getMinutes() + " " + "mins";
document.getElementById("min3").innerHTML = min.getMinutes() + " " + "mins";
document.getElementById("min4").innerHTML = min.getMinutes() + " " + "mins";
// Get minutes
