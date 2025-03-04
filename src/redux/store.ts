import { configureStore } from "@reduxjs/toolkit";
import tournamentSlice from "./slices/tournamentSlice";

export const store = configureStore({
  reducer: {
    tournament: tournamentSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
