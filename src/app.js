var today = new Date();
var monthNumber = (today.getMonth()+1)
var day = today.getDate();

var months = ["Janv", "Fev", "Mars", "April","May", "June","July","Aug","Sep","Oct","Nov","Dec"]
var monthName = months[today.getMonth()]

let displayDate = document.querySelector("#thedate")
displayDate.innerHTML = `Today is ${monthName}  ${day}`;