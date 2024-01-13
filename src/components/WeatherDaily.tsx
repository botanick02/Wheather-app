import React from "react";
import DailyWeatherItem from "../elements/DailyWeatherItem";
import { useAppSelector } from "../store/useAppDispatch";

const WeatherDaily = () => {
  const dailyWeather = useAppSelector(state => state.Weather.daily);

  return (
    <div className="daily-panel">
      {dailyWeather.map(day => (
        <DailyWeatherItem day={day}/>
      ))}
    </div>
  );
};

export default WeatherDaily;
