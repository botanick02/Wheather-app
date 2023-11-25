import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../api/api";

export interface WeatherState {
  current: {
    time: Date;
    temperature_2m: number;
    weather_code: number;
  } | null;
  daily: {
    time: Date[];
    weatherCode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: number[];
    sunset: Date[];
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
