import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationFetchData } from "../../api/locationsApi";
export interface LocationData {
    id?: number;
    city?: string;
    latitude?: number;
    longitude?: number;
    country?: string;
}

const initialState: LocationData = {
  
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    fetchLocation: (state, action: PayloadAction<{id: number}>) => {
    },
    locationFetched: (state, action: PayloadAction<LocationFetchData>) => {
      state.city = action.payload.city;
      state.id = action.payload.id;
      state.country = action.payload.country;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { fetchLocation, locationFetched } = MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
