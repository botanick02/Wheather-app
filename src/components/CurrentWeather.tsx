import getWeatherDescription from "../api/weatherApiHelpers/weatherDescription";
import { useAppSelector } from "../store/useAppDispatch";
import { getDayOfWeek } from "../tools/datetime";

const CurrentWeather = () => {
  const currenWeather = useAppSelector((state) => state.Weather.current);
  const todayWeather = useAppSelector((state) => state.Weather.daily[0]);
  const location = useAppSelector(state => state.Location);

  const todayMaxTemp = todayWeather?.temperature2mMax;
  const todayMinTemp = todayWeather?.temperature2mMin;

  return currenWeather && todayMaxTemp && todayMinTemp ? (
    <div className="current-weather">
      <div className="current-weather__day">{getDayOfWeek()}</div>
      <div className="current-weather__location">{location.city}</div>
      <div className="current-weather__main">
        <div className="current-weather__main__temp">
          {currenWeather.temperature2m >= 0 && "+"}
          {Math.round(currenWeather.temperature2m)}°C
        </div>
        <div className="current-weather__main__desc">
          {getWeatherDescription(currenWeather.weatherCode)}
        </div>
      </div>
      <div className="current-weather__maxmin">
        <div className="current-weather__details__maxmin__max">
          Max.
          <div>
            {todayMaxTemp >= 0 && "+"}
            {Math.round(todayMaxTemp)}°C
          </div>
        </div>
        <div className="current-weather__details__maxmin__min">
          Min.
          <div>
            {todayMinTemp >= 0 && "+"}
            {Math.round(todayMinTemp)}°C
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CurrentWeather;
