import { Epic, combineEpics, ofType } from "redux-observable";
import { from, mergeMap, map, catchError } from "rxjs"; 
import fetchWeatherDataApi, { WeatherData } from "../../api/api";
import { fetchWeather, weatherFetched } from "./Weather.slice";


export const fetchWeatherEpic: Epic<any, any, any> = (action$, state$) => {
    return action$.pipe(
      ofType(fetchWeather),
      mergeMap(() =>
        from(fetchWeatherDataApi()).pipe(
          map((data: WeatherData) => 
            weatherFetched(data)
          )
        )
      )
    );
  };


  export const WeatherEpic = combineEpics(fetchWeatherEpic);
