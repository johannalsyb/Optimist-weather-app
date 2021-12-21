const apiKey = "918b8d9899bdd33b4c0152c02d23b5f9";


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
    showData(lat,lng)
}

function showData(lat,lng) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(handleData);
   
}

function handleData(response){
  var city = response.data.name;

  var tempCity = Math.round(response.data.main.temp);
  let h1 = document.querySelector(".card-title");
 h1.innerHTML = response.data.name;

 let temperature = document.querySelector("#temp");
 temperature.innerHTML = `${tempCity}°C`;
  
 let description = response.data.weather[0].description;
 let detail = document.querySelector("#description");
 detail.innerHTML = description;
}



  navigator.geolocation.getCurrentPosition(handlePosition)


