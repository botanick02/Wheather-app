import getWeatherDescription from "../api/weatherApiHelpers/weatherDescription";
import { useAppSelector } from "../store/useAppDispatch";

const CurrentWeather = () => {
  const currenWeather = useAppSelector((state) => state.Weather.current);
  const todayMaxTemp = useAppSelector(
    (state) => state.Weather.daily?.temperature_2m_max[0]
  );
  const todayMinTemp = useAppSelector(
    (state) => state.Weather.daily?.temperature_2m_min[0]
  );


  return (
    (currenWeather && todayMaxTemp && todayMinTemp) ? (
      <div className="current-weather">
        <div className="current-weather__day">Monday</div>
        <div className="current-weather__location">Sacramento</div>
        <div className="current-weather__main">
          <div className="current-weather__main__temp">
            {currenWeather.temperature_2m >= 0 && "+"}
            {Math.round(currenWeather.temperature_2m)}°C
          </div>
          <div className="current-weather__main__desc">
            {getWeatherDescription(currenWeather.weather_code)}
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
    ): <></>
  );
};

export default CurrentWeather;
