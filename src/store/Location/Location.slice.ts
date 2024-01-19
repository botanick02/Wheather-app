import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationFetchData } from "../../api/locationsApi";

interface Location {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  country: string;
}
export interface LocationData {
  searchedLocation?: Location;
  gpsLocation?: Location;
  failedToReceiveGPS: boolean;
}

const initialState: LocationData = {
  failedToReceiveGPS: false
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    fetchLocationById: (state, action: PayloadAction<{ id: number }>) => {},
    fetchLocationByGPS: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
    },
    fetchLocationByGPSFail: (state) => {
      state.failedToReceiveGPS = true;
    },
    GPSlocationFetched: (state, action: PayloadAction<LocationFetchData>) => {
      state.gpsLocation = action.payload;
    },
    searchlocationFetched: (state, action: PayloadAction<LocationFetchData>) => {
      state.searchedLocation = action.payload;
    },
  },
});

export const { fetchLocationById, GPSlocationFetched, searchlocationFetched, fetchLocationByGPS, fetchLocationByGPSFail } =
  MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
