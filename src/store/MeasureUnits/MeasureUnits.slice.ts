import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MeasureUnitsState {
  currentUnit: "celsius" | "fahrenheit";
}

const initialState: MeasureUnitsState = {
  currentUnit: "celsius",
};

export const MeasureUnitsSlice = createSlice({
  name: "MeasureUnits",
  initialState: initialState,
  reducers: {
    setCurrentUnit: (
      state,
      action: PayloadAction<"celsius" | "fahrenheit">
    ) => {
      state.currentUnit = action.payload;
    },
  },
});

export const { setCurrentUnit } = MeasureUnitsSlice.actions;

export default MeasureUnitsSlice.reducer;
