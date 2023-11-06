const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <div className="current-weather__location">Kyiv, Ukraine</div>

      <div className="current-weather__main">
        <img
          src={require("../img/sun.png")}
          alt="weather img"
          className="current-weather__main__visual"
        />
        <div className="current-weather__main__temp">+10°C</div>
      </div>
      <div className="current-weather__details">
        <div className="current-weather__details__description">
          Mostly clear
        </div>
        <div className="current-weather__details__maxmin">+12°C +6°C</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
