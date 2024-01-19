import { Epic, combineEpics, ofType } from "redux-observable";
import { from, mergeMap, map } from "rxjs";
import {
  fetchLocation,
  fetchLocationByGPS,
  locationFetched,
} from "./Location.slice";
import {
  LocationFetchData,
  fetchLocationByGPSApi,
  fetchLocationByIdApi,
} from "../../api/locationsApi";

export const fetchLocationEpic: Epic<any, any, any> = (action$, state$) => {
  return action$.pipe(
    ofType(fetchLocation),
    mergeMap((action) =>
      from(fetchLocationByIdApi(action.payload.id)).pipe(
        map((data: LocationFetchData) => locationFetched(data))
      )
    )
  );
};

export const fetchLocationByGPSEpic: Epic<any, any, any> = (
  action$,
  state$
) => {
  return action$.pipe(
    ofType(fetchLocationByGPS),
    mergeMap((action) =>
      from(
        fetchLocationByGPSApi(action.payload.latitude, action.payload.longitude)
      ).pipe(map((data: LocationFetchData) => locationFetched(data)))
    )
  );
};

export const LocationEpic = combineEpics(
  fetchLocationEpic,
  fetchLocationByGPSEpic
);
