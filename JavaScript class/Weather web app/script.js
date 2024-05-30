let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData =async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("please enter the city name");
        return;
    } 

    const city = inputBox.value;

    const fetchData =await fetch(`http://api.weatherapi.com/v1/current.json?key=30c8cde283e1499a8cc153028242305&q=${city}`);
    const orgData=await fetchData.json();
    data=orgData;
    console.log(data);

    // displaying the data in html
    countryName.innerHTML=data.location.country;
    stateName.innerHTML=data.location.region;
    cityName.innerHTML=data.location.name;
    humidity.innerHTML=data.current.humidity;
    windSpeed.innerHTML=data.current.wind_kph;
    temprature.innerHTML=data.current.temp_c;
    logoImage.src=data.current.condition.icon;
    weatherStatus.innerHTML=data.current.condition.text;
    
};


