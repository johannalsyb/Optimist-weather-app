const apiKey = "918b8d9899bdd33b4c0152c02d23b5f9";


var today = new Date();
var monthNumber = (today.getMonth() + 1)
var day = today.getDate();

var months = ["Janv", "Fev", "Mars", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
var monthName = months[today.getMonth()]

let displayDate = document.querySelector("#thedate")
displayDate.innerHTML = `${monthName}  ${day}`;

let position = navigator.geolocation.getCurrentPosition;




function handlePosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    showData(lat, lng)
}

function showData(lat, lng) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleData);

}

function handleData(response) {
   
    const city = response.data.name;
    var tempCity = Math.round(response.data.main.temp);
    let h1 = document.querySelector(".card-title");
    h1.innerHTML = response.data.name;

    let temperature = document.querySelector("#temp");
    temperature.innerHTML = `${tempCity}°C`;

}



navigator.geolocation.getCurrentPosition(handlePosition)


// 1- Assign a click event listener to the search button.
// 2- When its clicking take the input and store it on a variable.
// 3- Send this input to the API request (new URL)
// 4- Then I call the function with the response.



document.getElementById("btn").addEventListener("click", myFunction);

function myFunction(event) {
    let input = document.querySelector(".form-control").value;
    let newQuery = document.querySelector(".card-title");
    newQuery.innerHTML = input;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showDataNewQuery);
}

const showDataNewQuery = response => {
 
    let newTempQuery = Math.round(response.data.main.temp)
    let currentTemp = document.querySelector("#temp");
    currentTemp.innerHTML = newTempQuery + "°C";
    var element = document.querySelector(".background-card");
    var header = document.querySelector(".card-header");
    var search = document.querySelector(".search-bar");
    let tempFirstDay = document.querySelector("#dayplusone");
    let resultFirstDay = newTempQuery + 2 ;
    tempFirstDay.innerHTML = `${resultFirstDay} °C`;
   




    let queryDescription = response.data.weather[0].description;
    let displayDescription = document.querySelector("#description");


    element.classList.remove("dark-background");
    element.classList.remove("warm-background");
    if (newTempQuery < 5) {
        element.classList.add("dark-background");
    } else if (newTempQuery > 20) {
        element.classList.add("warm-background");
    }

    
    displayDescription.innerHTML = queryDescription;
    
   iconElements = document.querySelectorAll(".icon");
  
   iconElements.forEach(element => {
     element.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
   });
   


};




// var icons = document.querySelector(".icoins");
//     for (let i = 0; i <= icons.length - 1; i++){
//       if (newTempQuery < 0 ){
//       icons[i].setAttribute("src", "img/snow.png")
//       }

//     }