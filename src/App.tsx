import React, { useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./store/useAppDispatch";
import { fetchWeather } from "./store/Weather/Weather.slice";
import { fetchLocation } from "./store/Location/Location.slice";
import { getWeatherBackgroundStyle } from "./api/weatherApiHelpers/weatherCodesHelper";

function App() {
  const dispatch = useAppDispatch();
  const locationId = useAppSelector((state) => state.Location.id);
  const currentWeatherCode = useAppSelector(
    (state) => state.Weather.current?.weatherCode
  );
  const currentUnit = useAppSelector((state) => state.MeasureUnits.currentUnit);

  const weatherIsLoading = useAppSelector((state) => state.Weather.isLoading);

  useEffect(() => {
    if (locationId) {
      dispatch(fetchWeather());
    }
  }, [locationId, currentUnit, dispatch]);

  // Kyiv, Ukraine city id for initial fetch
  useEffect(() => {
    dispatch(fetchLocation({ id: 270 }));
  }, [dispatch]);

  return currentWeatherCode !== undefined ? (
    <div
      className={`App-background ${getWeatherBackgroundStyle(
        currentWeatherCode
      )}`}
    >
      {weatherIsLoading && <div className={`blur-loading`}></div>}

      <div className="App">
        <Header />
        <CurrentWeather />
        <WeatherDaily />
        <WeatherHourly />
        <Footer />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default App;
