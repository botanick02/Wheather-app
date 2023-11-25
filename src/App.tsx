import React, { useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";
import Header from "./components/Header";
import { useAppDispatch } from "./store/useAppDispatch";
import { fetchWeather } from "./store/Weather/Weather.slice";

function App() {

  const dispatch = useAppDispatch();
  
    dispatch(fetchWeather());

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

