import React from "react";
import'./Weather.css';
export default function Weather(){
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
      <h1>
        Madrid
      </h1>
      <ul>
        <li>
          Friday 09:55
        </li>
         <li>
          Mostly sunny
        </li>
      </ul>
    <div className="row"  >
      <div className="col-6">
        <img src="https://whatemoji.org/wp-content/uploads/2020/07/Sun-Behind-Cloud-Emoji.png"width="100" alt="sun-behind-cloud-image"/>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Precipitation:15%
          </li>
          <li>
            Humidity:72%
          </li>
          <li>
            Wind:13km/h%
          </li>
        </ul>
      </div>
    </div>
</div>
      </div>
    )
}