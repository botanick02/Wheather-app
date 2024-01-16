import weatherCodesData from './weatherCodes.json';

type WeatherCode = {
  code: number | number[];
  description: string;
  icon: string;
  backgroundStyle: string;
};

const weatherCodes: WeatherCode[] = weatherCodesData.weather_codes;

export const getWeatherDescription = (code: number): string | undefined => {
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

export const getWeatherBackgroundStyle = (code: number): string | undefined => {
  for (const weatherCode of weatherCodes) {
    if (Array.isArray(weatherCode.code)) {
      if (weatherCode.code.includes(code)) {
        return weatherCode.backgroundStyle;
      }
    } else if (weatherCode.code === code) {
      return weatherCode.backgroundStyle;
    }
  }
};

export const getWeatherIcon = (code: number): string | undefined => {
  for (const weatherCode of weatherCodes) {
    if (Array.isArray(weatherCode.code)) {
      if (weatherCode.code.includes(code)) {
        return weatherCode.icon;
      }
    } else if (weatherCode.code === code) {
      return weatherCode.icon;
    }
  }
};
