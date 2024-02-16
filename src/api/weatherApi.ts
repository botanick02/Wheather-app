import { WeatherData } from "../store/Weather/Weather.slice";
import { api } from "./core";
export interface WeatherFetchData {
  current: {
    time: Date;
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: Date[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_probability_max: number[];
  };
}

const weatherDataEndpoint = "https://api.open-meteo.com/v1";


const transformWeatherData = (data: WeatherFetchData): WeatherData => {
  if (!data) {
    return { current: null, daily: [] };
  }

  const { current, daily } = data;

  const transformedDaily = daily.time.map((time, index) => ({
    time,
    weatherCode: daily.weather_code[index],
    temperature2mMax: daily.temperature_2m_max[index],
    temperature2mMin: daily.temperature_2m_min[index],
    sunrise: daily.sunrise[index],
    sunset: daily.sunset[index],
    precipitationProbability: daily.precipitation_probability_max[index],
  }));

  const transformedCurrent = {
    time: current.time,
    temperature2m: current.temperature_2m,
    weatherCode: current.weather_code,
  };

  return { current: transformedCurrent, daily: transformedDaily };
};

const fetchWeatherDataApi = (
  latitude: number,
  longitude: number,
  fahrenheit = false
): Promise<WeatherData> => {
  return api<WeatherFetchData>(
    `${weatherDataEndpoint}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max${
      fahrenheit ? "&temperature_unit=fahrenheit" : ""
    }`
  ).then((response) => {
    return transformWeatherData(response);
  });
};

export default fetchWeatherDataApi;
