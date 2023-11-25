import { useAppSelector } from "../store/useAppDispatch";

const CurrentWeather = () => {
  const currenWeather = useAppSelector(state => state.Weather.current);

  return currenWeather && (
    <div className="current-weather">
      <div className="current-weather__day">Monday</div>
      <div className="current-weather__location">Sacramento</div>
      <div className="current-weather__main">
        <div className="current-weather__main__temp">+{Math.round(currenWeather.temperature_2m)}°C</div>
        <div className="current-weather__main__desc">Sunny</div>
      </div>
      <div className="current-weather__maxmin">
        <div className="current-weather__details__maxmin__max">
          Max.<div>+17°C</div>
        </div>
        <div className="current-weather__details__maxmin__min">
          Min.<div>+15°C</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
