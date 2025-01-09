const apikey="449dc2c606c8961d37253a1255e5ea64"
const URL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let searchInput=document.querySelector("#search");
let searchBtn=document.querySelector(".searchbutton")

async function checkWeather(city) {
    const response=await fetch(URL + city + `&appid=${apikey}`)
    let data = await response.json()

    console.log(data);

    document.querySelector("#city").innerHTML=`Weather in ${data.name}`
    document.querySelector("#temperature").innerHTML=`${Math.round(data.main.temp)}°C`
    document.querySelector("#Humidity").innerHTML=`${data.main.humidity}%`
    document.querySelector("#Speed").innerHTML=`${data.wind.speed}km/h`
    document.querySelector("#cloud").innerHTML=`${data.weather[0].description}`

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value)
})