import React,{useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import'./Weather.css';
export default function Weather(){
  const [weatherData, setWeatherData] = useState({ready:false});
  function showTemperature(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    date: new Date(response.data.dt*1000),
    iconUrl: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

  }
  if(weatherData.ready){
  return(<div className="weather">
   <div className="container"> 
      <form>
        <div className="row">
          <div className="col-9">
          <input
          type="search" 
          placeholder="Type a city" className="form-control"/>  
          </div>
          <div className="col-3">
           <input type="submit" value="Submit" className="btn btn-primary" /> 
          </div>
        </div>
      </form>
      <h1 className="daily mt-3 ms-4 text-capitalize">
       {weatherData.city}
      </h1>
      <ul className="daily">
        <li> <FormattedDate date={weatherData.date}/>
        </li>
         <li className="text-capitalize">
          
        </li>
      </ul>
      
    <div className="row mt-3"  >
      <div className="col-6">
        <div className="clearfix"> 
        <img src="{weatherData.iconUrl}" alt="{weatherData.description}" className="float-left"/>
      </div>
      <div className="float-left">
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">ºc</span></div></div>
      <div className="col-6">
        <ul>
  
          <li>
            Humidity:{Math.round(weatherData.humidity)}%
          </li>
          <li>
            Wind:{Math.round(weatherData.wind)}km/h
          </li>
        </ul>
      </div>
    </div>
</div>
      </div>
    )  
  } else {
   const apiKey= "c8a77112b2faf6684bb4b21a0aa778ae";
  let city="madrid"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
return"Loading"  
  }
 
 
}