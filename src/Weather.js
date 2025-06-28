import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import'./Weather.css';
export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function showTemperature(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
    date: new Date(response.data.time*1000),
    iconUrl:response.data.condition.icon_url,
    icon: response.data.condition.icon,
      description: response.data.condition.description,
      wind: response.data.wind.speed,

    });

  }
  function handleSubmit(event){
    event.preventDefault();
    alert(city)
  }
  function handleCityChange(event){
setCity(event.target.value);
  }
  if(weatherData.ready){
  return(<div className="weather">
   <div className="container"> 
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
          <input
          type="search" 
          placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>  
          </div>
          <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary w-100" /> 
          </div>
        </div>
      </form>
    <WeatherInfo data={weatherData} />
      </div>
      </div>
    )  
  } else {
   const apiKey= "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
return"Loading"  
  } 
}