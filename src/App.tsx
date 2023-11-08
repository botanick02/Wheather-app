import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";
import Header from "./components/Header";

function App() {


  return (
    <div className="App-background">
      <div className="App">
        <Header/>
        <CurrentWeather/>
        <WeatherDaily/>
        <WeatherHourly/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
