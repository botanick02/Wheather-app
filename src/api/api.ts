import { fetchWeatherApi } from "openmeteo";
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';
export interface WeatherData {
  current: {
    time: Date;
    temperature_2m: number;
    weather_code: number;
  };
  daily: {
    time: Date[];
    weatherCode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: number[];
    sunset: Date[];
  };
}


const fetchWeatherDataApi = (): Promise<WeatherData>=> {
  return new Promise((resolve, reject) => {
    const data$ = fromFetch('https://api.open-meteo.com/v1/forecast?latitude=35.0211&longitude=35.7538&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset').pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return of({ error: true, message: `Error ${ response.status }` });
        }
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message })
      })
    );

    data$.subscribe({
      next: result => resolve(result),
      error: err => reject(err),
      complete: () => console.log('done')
    });
  }) as Promise<WeatherData>;
};


export default fetchWeatherDataApi;


