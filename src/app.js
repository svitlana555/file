let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentDate = document.querySelector("#date");
currentDate.innerHTML = `${day},${hours}:${minutes}`;

function changeToFarenheit() {
  let temparature = document.querySelector(".currentTemperature");
  temparature.innerHTML = `66`;
}
let changeValue = document.querySelector(".farenheit");
changeValue.addEventListener("click", changeToFarenheit);

function changeToCelsiy() {
  let temparature = document.querySelector(".currentTemperature");
  temparature.innerHTML = `20`;
}
let changeValued = document.querySelector(".celsiy");
changeValued.addEventListener("click", changeToCelsiy);




function showCurrentTemperature(responce){

  let currentPosition = document.querySelector("#town");
  let position = responce.data.name;
  currentPosition.innerHTML = `${position}`;

  let temperature = Math.round(responce.data.main.temp);
  let value = document.querySelector(".currentTemperature");
  value.innerHTML= temperature;
  
}

function showPosition(position) {
  let apiKey = "a46ff49eca8eaaefc456b80e1b117ed7";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
 axios.get(apiUrl).then(showCurrentTemperature);
 }

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentButton = document.querySelector("#button-current");
currentButton.addEventListener("click", getLocation);

 
function showTemperature(responce) {
  let element=document.querySelector("#town");
  element.innerHTML= responce.data.name;
  let temp = document.querySelector(".currentTemperature");
  temp.innerHTML = `${Math.round(responce.data.main.temp)}`;
}

function search(event) {
  event.preventDefault();
  let enterCity = document.querySelector("#city").value;
  let key = "a46ff49eca8eaaefc456b80e1b117ed7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${enterCity}&appid=${key}&units=metric`;
  axios.get(url).then(showTemperature);

}


let change = document.querySelector(".button-search");
change.addEventListener("click", search);

