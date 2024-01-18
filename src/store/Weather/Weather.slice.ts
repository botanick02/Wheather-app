import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherData {
  current: {
    time: Date;
    temperature2m: number;
    weatherCode: number;
  } | null;
  daily: dailyWeatherData[];
}

export interface dailyWeatherData {
  time: Date;
  weatherCode: number;
  temperature2mMax: number;
  temperature2mMin: number;
  sunrise: string;
  sunset: string;
  precipitationProbability: number;
}

interface WeatherState extends WeatherData{
  isLoading: boolean;
}

const initialState: WeatherState = {
  current: null,
  daily: [],
  isLoading: true,
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    fetchWeather: (state) => {
      state.isLoading = true;
    },
    weatherFetched: (state, action: PayloadAction<WeatherData>) => {
      state.current = action.payload.current;
      state.daily = action.payload.daily;
      state.isLoading = false;
    },
  },
});

export const { weatherFetched, fetchWeather } = MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
