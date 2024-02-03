import React, { useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";
import WeatherDaily from "./components/WeatherDaily";
import WeatherHourly from "./components/WeatherHourly";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./store/useAppDispatch";
import { fetchWeather, fetchfailed } from "./store/Weather/Weather.slice";
import {
  fetchLocationByGPS,
  fetchLocationByGPSFail,
} from "./store/Location/Location.slice";
import { getWeatherBackgroundStyle } from "./api/weatherApiHelpers/weatherCodesHelper";
import WelcomePanel from "./components/WelcomePanel";

function App() {
  const dispatch = useAppDispatch();
  const locationData = useAppSelector((state) => state.Location);
  const currentWeatherCode = useAppSelector(
    (state) => state.Weather.current?.weatherCode
  );

  const currentUnit = useAppSelector((state) => state.MeasureUnits.currentUnit);
  const weatherIsLoading = useAppSelector((state) => state.Weather.isLoading);

  useEffect(() => {
    if (locationData.gpsLocation?.id || locationData.searchedLocation?.id) {
      dispatch(fetchWeather());
    }
  }, [locationData, currentUnit, dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          fetchLocationByGPS({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      },
      (error) => {
        dispatch(fetchLocationByGPSFail());
        dispatch(fetchfailed());
      }
    );
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
  ) : weatherIsLoading ? (
    <></>
  ) : (
    <div className={`App-background`}>
      <div className="App">
        <WelcomePanel />
      </div>
    </div>
  );
}

export default App;
