import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import MeasureUnitsSlice from "./MeasureUnits/MeasureUnits.slice";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics();

const rootReducer = combineReducers({
  MeasureUnits: MeasureUnitsSlice,
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
