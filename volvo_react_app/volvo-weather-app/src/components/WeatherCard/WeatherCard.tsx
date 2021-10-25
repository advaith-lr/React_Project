import  './WeatherCard.css'
import { useState, useEffect } from 'react';
import {CardItem} from './CardItem'
import * as DataService from "./../../service/DataService"
// import { createNull } from 'typescript';

type CardProps ={
    city: String;
    whatDate : String;
}


interface WeatherData {
    min_temp: number;
    max_temp: number;
    the_temp: number;
    humidity: number;
    weather_state_name: String;
    weather_state_abbr: String;
    applicable_date: Date | null;
    wind_speed: number;
    wind_direction_compass: String;
    visibility : number;
    air_pressure: number;
  }
let weatherDataInit: WeatherData = {
    min_temp : 0,
    max_temp : 0,
    wind_speed : 0,
    the_temp : 0,
    humidity: 0,
    weather_state_name : "",
    weather_state_abbr : "",
    wind_direction_compass : "",
    applicable_date : null,
    visibility : 0,
    air_pressure: 0
}

export const calculateCtoF  = ( centVal : number) =>  centVal * 9 / 5 + 32;
export const calculateFtoC  = ( farVal : number) =>  (farVal - 32) * 5 / 9;;

export const WeatherCard = ({city, whatDate}: CardProps) => {
    // const [woeid, setWoeid] = useState([]);
    const [weatherArray, setWeatherArray] = useState<any| null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData>(weatherDataInit)
    const [icon, setIcon] = useState("");
    const [isC, setIsC] = useState(true);
    // const [when, setWhen] = useState(whatDate);
    const [isLoading, setIsLoading] = useState(false);

    let weatherArrayInternal :any ;
    useEffect(() => {
        // here goes the data fetching 
        const fetchWeatherData = async () => {
            
            if(weatherArray === null){
                await setIsLoading(true)
                weatherArrayInternal = await DataService.callAPI(city) // Call API and get the weather data of the city passed
                await setIsLoading(false) 
            }
            else{
                weatherArrayInternal = weatherArray;
            }
            
                await setWeatherArray(weatherArrayInternal);
            if(weatherArrayInternal != 'E'){
                await setIsC(true);
                let weatherData : WeatherData =  await DataService.getrequireDaysWeather(weatherArrayInternal, whatDate );//Get required date's weather data
                await setWeatherData(weatherData);
                await setIcon(`${DataService.baseUrl}/static/img/weather/png/64/${weatherData.weather_state_abbr}.png`)
            }
          };

          fetchWeatherData();
    },[whatDate]);

    const toggleCtoF = () => {
        setIsC(!isC);
        
        if(isC){
            setWeatherData({...weatherData,
                             min_temp : calculateCtoF(weatherData.min_temp),
                             max_temp : calculateCtoF(weatherData.max_temp), 
                            })
        }  
        else{
            setWeatherData({...weatherData, min_temp : calculateFtoC(weatherData.min_temp),
                            max_temp : calculateFtoC(weatherData.max_temp), 
                             })
        }
    }
    return (
        <div data-testid = {`card-${city}`} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 ">
            <div className="card" >
            { weatherArray === 'E' && 
                 <div className="alert alert-danger" role="alert">
                    Failed to fetch Data
                </div>
            }
                
                <div className="row " style={{ cursor: 'pointer'}}>
                    
                    <div className="card-title col-8 px-4" onClick ={toggleCtoF}> {/* Toggle between celsius and Farenheit */}
                        <h2> {city} </h2>
 
                        <div className="tempClass">
                        <CardItem 
                            title = "H" 
                            value= { Math.round(weatherData.max_temp).toString() }  
                            units = {'\u00B0'.concat(isC ? 'c' : 'f') }
                            size = 'h4'>
                        </CardItem>  
                        <CardItem 
                            title = "L" 
                            value= { Math.round(weatherData.min_temp).toString() }  
                            units = {'\u00B0'.concat(isC ? 'c' : 'f') }
                            size = 'h4'>
                        </CardItem> 
                        </div>
                    </div>
                    <div className="col-4 text-center my-2" >
                        <img className="border border-dark rounded" src= {icon} height= "64px" width= "64px" alt="Loading"/>
                        <p className="font-weight-bold">{weatherData.weather_state_name} </p>
                    </div>
                </div>
                {isLoading ? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div> : <div/> }
                <div className=" card-text" >
                    {/* <h2 >
                        { Math.round(weatherData.the_temp)  } &deg; 
                        {isC ? 'c' : 'f' } 
                    </h2>  */}
                    <div >
                       
                    </div >
                    <div className= "row py-2">
                        <div className= "col-6 ">
                            <CardItem 
                                title = "Wind" 
                                value= {(weatherData.wind_direction_compass + ' ').concat(Math.round(weatherData.wind_speed).toString())}  
                                units = "mph"
                                size = 'h7'>
                            </CardItem>   
                        </div>
                        <div className= "col-6">
                            <CardItem 
                                title = "Humidity" 
                                value= {Math.round(weatherData.humidity).toString()}  
                                units = "%"
                                size = 'h7'>
                            </CardItem>   
                        </div>
                    </div>
                    <div className= "row py-2">
                        <div className= "col-6">
                            <CardItem 
                                title = "Visibility" 
                                value= {Math.round(weatherData.visibility).toString()}  
                                units = "miles"
                                size = 'h7'>
                            </CardItem>   
                        </div>
                        <div className= "col-6">
                            <CardItem 
                                title = "Preasure" 
                                value= {Math.round(weatherData.air_pressure).toString()}  
                                units = "mbar"
                                size = 'h7'>
                            </CardItem>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

