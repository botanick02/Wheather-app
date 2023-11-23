import { fetchWeatherApi } from "openmeteo";
export interface WeatherData {
  current: {
    time: Date;
    temperature2m: number;
    weatherCode: number;
  };
  daily: {
    time: Date[];
    weatherCode: Float32Array;
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    sunrise: Float32Array;
    sunset: Float32Array;
    precipitationSum: Float32Array;
  };
}

const fetchWeatherDataApi = async (): Promise<WeatherData> => {
  const params = {
    latitude: 55.7033,
    longitude: 21.1443,
    current: ["temperature_2m", "weather_code"],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "precipitation_sum",
    ],
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData: WeatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      sunrise: daily.variables(3)!.valuesArray()!,
      sunset: daily.variables(4)!.valuesArray()!,
      precipitationSum: daily.variables(5)!.valuesArray()!,
    },
  };

  return weatherData;
  // `weatherData` now contains a simple structure with arrays for datetime and weather data
 
};

export default fetchWeatherDataApi;