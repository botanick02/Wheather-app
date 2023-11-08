import React from "react";

const DailyWeatherItem = () => {
  return (
    <div className="daily-item">
      <div className="daily-item__date">
        25 November
        <br />
        Friday
      </div>
      <img src={require("../img/sun.png")} alt="" className="daily-item__visual" />
      <div className="daily-item__temp">+10°C +6°C</div>
    </div>
  );
};

export default DailyWeatherItem;
