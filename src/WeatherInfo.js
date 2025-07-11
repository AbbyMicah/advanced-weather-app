import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return(
    <div className="weather">
    <h1 className=" text-capitalize">
           {props.data.city}
          </h1>
          <ul className="daily">
            <li> <FormattedDate date={props.data.date}/>
            </li>
             <li className="text-capitalize">
              
            </li>
          </ul>
          
        <div className="row mt-3"  >
          <div className="col-6">
            <div className="clearfix"> 
            <img src={props.data.iconUrl} alt={props.data.description} className="float-left"/>
           <div className="float-left">
           <WeatherTemperature celsius={props.data.temperature}/>
            </div>
            </div>
            </div>
          <div className="col-6">
            <ul>
      
              <li>
                Humidity:{Math.round(props.data.humidity)}%
              </li>
              <li>
                Wind:{Math.round(props.data.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
    </div> ); }