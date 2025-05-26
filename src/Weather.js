import React,{useState}from "react";
import axios from "axios";
import'./Weather.css';
export default function Weather(){
  const [weatherData, setWeatherData] = useState({ready:false});
  function showTemperature(response){
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      humidity:response.data.main.humidity,
    name:response.data.main.name,
      description:response.data.weather[0].main.description,
      wind:response.data.wind.speed,
      
    });
     console.log(response.data);
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
       {weatherData.name}
      </h1>
      <ul className="daily">
        <li>
          Friday 09:55
        </li>
         <li className="text-capitalize">
          {weatherData.description}
        </li>
      </ul>
      
    <div className="row mt-3"  >
      <div className="col-6">
        <div className="clearfix"> 
        <img src="{weatherData.description}" alt="{weatherData.description}" className="float-left"/>
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
            Wind:{Math.round(weatherData.wind)}km/h%
          </li>
        </ul>
      </div>
    </div>
</div>
      </div>
    )  
  } else {
   const apiKey= "c8a77112b2faf6684bb4b21a0aa778ae";
  let city="Bilbao"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
return"Loading"  
  }
 
 
}