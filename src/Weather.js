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
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
    date: new Date(response.data.time*1000),
    iconUrl:response.data.condition.icon_url,
    icon:response.data.condition.icon,
      description:response.data.condition.description,
      wind: response.data.wind.speed,

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
          placeholder="Enter a city" className="form-control" autoFocus="on"/>  
          </div>
          <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary w-100" /> 
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
       <div className="float-left">
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">ºc</span>
        </div>
        </div>
        </div>
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
   const apiKey= "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let city="madrid";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
return"Loading"  
  }
 
 
}