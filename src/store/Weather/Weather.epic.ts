import { Epic, combineEpics, ofType } from "redux-observable";
import { from, mergeMap, map } from "rxjs"; 
import fetchWeatherDataApi from "../../api/weatherApi";
import { WeatherData, fetchWeather, weatherFetched } from "./Weather.slice";


export const fetchWeatherEpic: Epic<any, any, any> = (action$, state$) => {
    return action$.pipe(
      ofType(fetchWeather),
      mergeMap(() =>
        from(fetchWeatherDataApi(state$.value.Location.latitude, state$.value.Location.longitude, state$.value.MeasureUnits.currentUnit === "fahrenheit")).pipe(
          map((data: WeatherData) => 
            weatherFetched(data)
          )
        )
      )
    );
  };


  export const WeatherEpic = combineEpics(fetchWeatherEpic);
