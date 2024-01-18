import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import MeasureUnitsSlice from "./MeasureUnits/MeasureUnits.slice";
import WeatherSlice from "./Weather/Weather.slice";
import { WeatherEpic } from "./Weather/Weather.epic";
import LocationSlice from "./Location/Location.slice";
import { LocationEpic } from "./Location/Location.epic";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(WeatherEpic, LocationEpic);

const rootReducer = combineReducers({
  MeasureUnits: MeasureUnitsSlice,
  Weather: WeatherSlice,
  Location: LocationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(epicMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
epicMiddleware.run(rootEpic);
