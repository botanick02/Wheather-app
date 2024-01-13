import { Epic, combineEpics, ofType } from "redux-observable";
import { from, mergeMap, map } from "rxjs";
import { fetchLocation, locationFetched } from "./Location.slice";
import {
  LocationFetchData,
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

export const LocationEpic = combineEpics(fetchLocationEpic);
