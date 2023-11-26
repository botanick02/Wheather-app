import { WeatherData } from "../store/Weather/Weather.slice";
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
    sunrise: number[];
    sunset: Date[];
  };
}

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
  }));

  const transformedCurrent = {
    time: current.time,
    temperature2m: current.temperature_2m,
    weatherCode: current.weather_code,
  };

  return { current: transformedCurrent, daily: transformedDaily };
};

function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<T>;
  });
}

const fetchWeatherDataApi = (): Promise<WeatherData> => {
  return api<WeatherFetchData>(
    "https://api.open-meteo.com/v1/forecast?latitude=38.5816&longitude=-121.4944&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset"
  ).then((response) => {
    return transformWeatherData(response);
  });
};

export default fetchWeatherDataApi;
