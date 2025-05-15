import SearchEngine from './SearchEngine';
import './App.css';
function App() {
  return (
    <div className="App">
      <SearchEngine />
      <form>
        <input
          type="search"
          placeholder="Type a city" />
        <input type="submit" value="Enter" />
      </form>
    
         <a href="https://github.com/AbbyMicah/advanced-weather-app" target_blank>This project was coded by Abigail Ideyi and is opened sourced in github</a><a href=""> and hosted on Netlify</a>
      
    </div>
  );
}

export default App;
