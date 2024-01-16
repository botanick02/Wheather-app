import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface WeatherData {
  current: {
    time: Date;
    temperature2m: number;
    weatherCode: number;
  } | null;
  daily: dailyWeatherData[];
}

export interface dailyWeatherData{
  time: Date;
  weatherCode: number;
  temperature2mMax: number;
  temperature2mMin: number;
  sunrise: number;
  sunset: Date;
  precipitationProbability: number;
}
const initialState: WeatherData = {
  current: null,
  daily: [],
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    fetchWeather: (state) => {
    },
    weatherFetched: (state, action: PayloadAction<WeatherData>) => {
      state.current = action.payload.current;
      state.daily = action.payload.daily;
    },
  },
});

export const { weatherFetched, fetchWeather } = MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
