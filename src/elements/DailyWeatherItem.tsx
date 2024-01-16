import React from "react";
import { dailyWeatherData } from "../store/Weather/Weather.slice";
import { getDayOfWeek, toTwoDigits } from "../tools/datetime";
import getWeatherDescription from "../api/weatherApiHelpers/weatherDescription";

interface DailyWeatherItemProps {
  day: dailyWeatherData;
}

const DailyWeatherItem = ({day}: DailyWeatherItemProps) => {
  const dayDate = new Date(day.time);

  return (
    <div className="daily-item">
      <div className="daily-item__day">{getDayOfWeek(dayDate)}</div>
      <div className="daily-item__card">
        <div className="daily-item__card__date">{toTwoDigits(dayDate.getDate())}.{toTwoDigits(dayDate.getMonth() + 1)}</div>
        <img
          src={require("../img/sunny.png")}
          alt=""
          className="daily-item__card__visual"
        />
        <div className="daily-item__card__descr">{getWeatherDescription(day.weatherCode)}</div>
        <div className="daily-item__card__maxmin">
          <div>
            Max.<div>{Math.round(day.temperature2mMax)}°C</div>
          </div>
          <div>
            Min.<div>{Math.round(day.temperature2mMin)}°C</div>
          </div>
        </div>
        <div className="daily-item__card__rain">Precipitation chance: {day.precipitationProbability}%</div>
        <div className="daily-item__card__suntime">
          <div>
            <img
              src={require("../img/sunrise.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>{new Date(day.sunrise).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
          </div>
          <div>
            <img
              src={require("../img/sunset.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>{new Date(day.sunset).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherItem;
