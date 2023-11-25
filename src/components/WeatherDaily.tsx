import React from "react";
import DailyWeatherItem from "../elements/DailyWeatherItem";
import { useAppSelector } from "../store/useAppDispatch";

const WeatherDaily = () => {
  const dailyWeather = useAppSelector(state => state.Weather.daily);

  return (
    <div className="daily-panel">
      <DailyWeatherItem/>
      <DailyWeatherItem/>
      <DailyWeatherItem/>
      <DailyWeatherItem/>
      <DailyWeatherItem/>
      <DailyWeatherItem/>
      <DailyWeatherItem/>
    </div>
  );
};

export default WeatherDaily;
