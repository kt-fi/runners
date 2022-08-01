


async function userLocation(){
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.ipgeolocation.io/ipgeo?apiKey=097fe594b71b43329909ca30a9248d60`);
    const data = await result.json();
    console.log(data)
    return data;
} catch(err){
    console.log(err)
}
}





const latLong = userLocation().then(result => { const thelocation = result.country_capital;
    const long = result.longitude;
    const lat = result.latitude;
    return (long, lat)
})
var [lat, long] = latLong;

async function getLatLong(lat, long){
  try{
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com//api/location/search/?lattlong=${lat},${long}`);
    const data = await result.json();
    console.log(data)
    return data;
} catch (err){
    console.log(err)
}
}

  
let endLoc;

getLonLatt(lat, long).then(result => { 
  const woeid = result[0].woeid;
  endLoc = woeid;
  const locName = result[0].title;
})


    async function getWeatherAW(woeid){
        try {
              const result =  await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
            const data = await result.json();
            console.log(data)
            return data;
        } catch(error) {
            console.log(error)
        }
        
        }
        let dataCity;
        getWeatherAW(endLoc).then(result => {dataCity = result;
        const weatherNow = Math.floor(dataCity.consolidated_weather[0].max_temp);
         
        if(weatherNow < 25){
            document.querySelector(".weather__today").innerHTML = "Todays current temperature is " + weatherNow + "&#8304;" + " nice weather for running in " + locName;
        }else{
            document.querySelector(".weather__today").innerHTML = "Todays current temperature is " + weatherNow +  "&#8304;"+" its too hot to run right now in  " + locName +", drink water";
            document.querySelector(".weather").style.backgroundColor ="orange"
            }
        })
        