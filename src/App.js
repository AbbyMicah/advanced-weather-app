import Weather from './Weather';
import './App.css';
import './Weather.css';
export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <Weather defaultCity="Bilbao" />
      <footer>
        
          This project was coded by{" "}
          <a href="https://abbyideyisportfolio.netlify.app/" target="_blank"> Abigail Ideyi</a>{" "}, 
          is open-sourced on {""}
          <a href="https://github.com/AbbyMicah/advanced-weather-app" target="_blank">  github</a> {""}
          and hosted on 
          <a href="https://myreactweatherproject.netlify.app/" target="_blank"> Netlify </a>  
      
      </footer>
    </div>
    </div>
  );
}

