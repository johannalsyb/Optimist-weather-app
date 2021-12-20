var today = new Date();
var monthNumber = (today.getMonth()+1)
var day = today.getDate();

var months = ["Janv", "Fev", "Mars", "April","May", "June","July","Aug","Sep","Oct","Nov","Dec"]
var monthName = months[today.getMonth()]

let displayDate = document.querySelector("#thedate")
displayDate.innerHTML = `Today is ${monthName}  ${day}`;

let position = navigator.geolocation.getCurrentPosition;


  function handlePosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    alert("lat:" + lat + " lng:" + lng);
    codeLatLng(lat, lng);
    let apikey = "918b8d9899bdd33b4c0152c02d23b5f9";
    let apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
  
}

  navigator.geolocation.getCurrentPosition(handlePosition)


