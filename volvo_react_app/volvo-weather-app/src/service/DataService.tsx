export const proxyAddress = 'http://localhost:8080';
export const baseUrl = 'https://www.metaweather.com'

let data : any;
let cityJson : any ;

export async function callAPI(city: String){
    let weatherArrayInternal : any;
    try{
        const res : any= await fetch(
            `${proxyAddress}/${baseUrl}/api/location/search/?query=${city}`
        );
            cityJson = await res.json(); //Contains Woeid to call the weather API

        const weatherRes : any= await fetch(
        `${proxyAddress}/${baseUrl}/api/location/${cityJson[0].woeid}`
        );
        data = await weatherRes.json(); // Contains full response data obect 
        weatherArrayInternal = await data.consolidated_weather; 
        // Contains array with data of different dates
        return  weatherArrayInternal;
    }catch{
        console.warn('fetchFailed')
        return  'E';
    }
}

var currentDate = new Date()
let today = currentDate.toISOString().split('T')[0];
currentDate.setDate((currentDate.getDate() + 1));
let tomorrow = currentDate.toISOString().split('T')[0]; 
currentDate.setDate((currentDate.getDate() + 1));
let twoDaysLater = currentDate.toISOString().split('T')[0]; 

export const  getrequireDaysWeather = (weatherArray: any, whatDate: String) =>{
  let weatherData:any ={};
  console.log(weatherArray)
  if(whatDate === 'today') {
      weatherData = weatherArray.filter((weatherData : any)=>{
          return  (weatherData.applicable_date === today) // Today's weather data 
      })
  }
  if(whatDate === 'tomorrow') {
      weatherData = weatherArray.filter(( weatherData : any)=>{
          return  weatherData.applicable_date === tomorrow // Tomorrow's weather data 
      })
  }
  if(whatDate === 'twoDaysLater') {
      weatherData =  weatherArray.filter((weatherData : any)=>{
          return  weatherData.applicable_date === twoDaysLater //Day after tomorrow's data
      })
  }
  return weatherData[0]; 
}