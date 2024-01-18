import React from "react";
import { dailyWeatherData } from "../store/Weather/Weather.slice";
import { getDayOfWeek, toTwoDigits } from "../tools/datetime";
import {
  getWeatherDescription,
  getWeatherIcon,
} from "../api/weatherApiHelpers/weatherCodesHelper";
import { useAppSelector } from "../store/useAppDispatch";

interface DailyWeatherItemProps {
  day: dailyWeatherData;
}

const DailyWeatherItem = ({ day }: DailyWeatherItemProps) => {
  const currentUnit = useAppSelector((state) => state.MeasureUnits.currentUnit);
  const unitSign = currentUnit === "celsius" ? "°C" : "°F";

  const dayDate = new Date(day.time);
  var sunrise = new Date(day.sunrise);
  var userTimezoneOffset = sunrise.getTimezoneOffset() * 60000;
  sunrise = new Date(sunrise.getTime() - userTimezoneOffset);

  const getHoursMinutesResetTimezone = (dateTimeString: string): string => {
    var dateTime = new Date(dateTimeString);
    var userTimezoneOffset = dateTime.getTimezoneOffset() * 60000;
    return new Date(dateTime.getTime() - userTimezoneOffset).toLocaleTimeString(
      [],
      { hour: "2-digit", minute: "2-digit" }
    );
  };

  return (
    <div className="daily-item">
      <div className="daily-item__day">{getDayOfWeek(dayDate)}</div>
      <div className="daily-item__card">
        <div className="daily-item__card__date">
          {toTwoDigits(dayDate.getDate())}.{toTwoDigits(dayDate.getMonth() + 1)}
        </div>
        <img
          src={require(`../img/${getWeatherIcon(day.weatherCode)}`)}
          alt=""
          className="daily-item__card__visual"
        />
        <div className="daily-item__card__descr">
          {getWeatherDescription(day.weatherCode)}
        </div>
        <div className="daily-item__card__maxmin">
          <div>
            Max.
            <div>
              {Math.round(day.temperature2mMax)}
              {unitSign}
            </div>
          </div>
          <div>
            Min.
            <div>
              {Math.round(day.temperature2mMin)}
              {unitSign}
            </div>
          </div>
        </div>
        <div className="daily-item__card__rain">
          Precipitation chance: {day.precipitationProbability}%
        </div>
        <div className="daily-item__card__suntime">
          <div>
            <img
              src={require("../img/sunrise.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>{getHoursMinutesResetTimezone(day.sunrise)}</div>
          </div>
          <div>
            <img
              src={require("../img/sunset.png")}
              alt=""
              className="daily-item__card__visual"
            />
            <div>{getHoursMinutesResetTimezone(day.sunset)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherItem;
