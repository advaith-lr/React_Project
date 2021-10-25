import React from 'react';

import {useState, useEffect} from "react";
import { Header} from './components/Header/Header'
import { WeatherContainer }  from './components/WeatherContainer'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 

// Components

// import Item from './Item/Item';
// import Cart from './Cart/Cart';





// const fetchData = () => {
//   // return fetch("https://meta-weather.vercel.app/api/location/2487956/2021/10/20/")
//   //       .then((response) => response.json())
//   //       .then((data) => console.log(data));}
//   //https://meta-weather.vercel.app/api//location/search/?query=${city}

//   return fetch("http://localhost:8080/https://www.metaweather.com/api/location/search/?query=london",{

//   })
//        .then((response) => response.json())
//          .then((data) => console.log(data));
//         }




const  App =() => {

  const [when, setWhen] = useState('tomorrow')
  const handleChange = (value : any) => {
    console.log(value)
    setWhen(value)
  }
  useEffect(() => {
    
    }, []);

  return (
    <div data-testid="App" className="App">
      
      <Header titleGreeting = 'Volvo' onDateChange = {handleChange} ></Header> 
       
      <WeatherContainer whatDate = {when}/>
    </div>
  );
}




export default App;
