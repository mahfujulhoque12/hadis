// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import duaReducer from "./feature/duaSlice";
import uiReducer from "./feature/uiSlice";


export const store = configureStore({
  reducer: {
     ui: uiReducer,
    dua: duaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
