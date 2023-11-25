import weatherCodesData from './weatherCodes.json';

type WeatherCode = {
  code: number | number[];
  description: string;
};

const weatherCodes: WeatherCode[] = weatherCodesData.weather_codes;

const getWeatherDescription = (code: number): string | undefined => {
  for (const weatherCode of weatherCodes) {
    if (Array.isArray(weatherCode.code)) {
      if (weatherCode.code.includes(code)) {
        return weatherCode.description;
      }
    } else if (weatherCode.code === code) {
      return weatherCode.description;
    }
  }
};

export default getWeatherDescription;