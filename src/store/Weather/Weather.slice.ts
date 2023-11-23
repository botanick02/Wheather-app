import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../api/api";

export interface WeatherState {
  current: {
    time: Date;
    temperature2m: number;
    weatherCode: number;
  } | null;
  daily: {
    time: Date[];
    weatherCode: Float32Array;
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
    sunrise: Float32Array;
    sunset: Float32Array;
    precipitationSum: Float32Array;
  } | null;
}

const initialState: WeatherState = {
  current: null,
  daily: null,
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    fetchWeather: (
        state
    ) => {

    },
    weatherFetched: (
      state,
      action: PayloadAction<WeatherData>
    ) => {
      state.current = action.payload.current;
      state.daily = action.payload.daily;
    },
  },
});

export const { weatherFetched, fetchWeather } = MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
