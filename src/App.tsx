import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <CurrentWeather/>
      <WeatherDaily/>
      <WeatherHourly/>
      <Footer/>
    </div>
  );
}

export default App;
