// store/features/duaSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { duaList } from "@/data/homeLeftData";

type Dua = typeof duaList[number];

interface DuaState {
  selectedDua: Dua;
}

const initialState: DuaState = {
  selectedDua: duaList[0], // Default selected
};

const duaSlice = createSlice({
  name: "dua",
  initialState,
  reducers: {
    setSelectedDua: (state, action: PayloadAction<Dua>) => {
      state.selectedDua = action.payload;
    },
  },
});

export const { setSelectedDua } = duaSlice.actions;
export default duaSlice.reducer;
