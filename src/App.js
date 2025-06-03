import Weather from './Weather';
import './App.css';
import './Weather.css';
function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p> 
          This projected was coded by
          <a rel='noreferrer' href="https://abbyideyisportfolio.netlify.app/" target="_blank"> Abigail Ideyi</a>, 
          is 
          <a rel='noreferrer' href="https://github.com/AbbyMicah/advanced-weather-app" target="_blank"> open-sourced on github</a> 
          and 
          <a rel='noreferrer' href="https://myreactweatherproject.netlify.app/" target="_blank"> Netlify </a>  
        </p>
      </footer>
    </div>
  );
}

export default App;
