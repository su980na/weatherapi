let searchbox=document.querySelector(".search input")
let searchbtn=document.querySelector(".search button")


const apikey="1f81ceaa88503c8c348bcf0fd65d3db3"

const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function chkweather(city) {
    const response= await fetch(apiurl+ city +`&appid=${apikey}`)
    var data= await response.json()
console.log(data)
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";



}
searchbtn.addEventListener("click",()=>{
    chkweather(searchbox.value)
})
chkweather(searchbox.value)