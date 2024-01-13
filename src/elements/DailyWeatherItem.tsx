import React from "react";
import { dailyWeatherData } from "../store/Weather/Weather.slice";
import { getDayOfWeek } from "../tools/datetime";

interface DailyWeatherItemProps {
  day: dailyWeatherData;
}

const DailyWeatherItem = ({day}: DailyWeatherItemProps) => {
  const dayDate = new Date(day.time);

  return (
    <div className="daily-item">
      <div className="daily-item__day">{getDayOfWeek(dayDate)}</div>
      <div className="daily-item__card">
        <div className="daily-item__card__date">01.01</div>
        <img
          src={require("../img/sunny.png")}
          alt=""
          className="daily-item__card__visual"
        />
        <div className="daily-item__card__descr">Sunny</div>
        <div className="daily-item__card__temp">+16°C</div>
        <div className="daily-item__card__rain">Chance of rain: 15%</div>
        <div className="daily-item__card__maxmin">
          <div>
            Max.<div>+17°C</div>
          </div>
          <div>
            Min.<div>+15°C</div>
          </div>
        </div>
        <div className="daily-item__card__suntime">
          <div>
            <img
              src={require("../img/sunrise.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>6:00AM</div>
          </div>
          <div>
            <img
              src={require("../img/sunset.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>6:00PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherItem;
