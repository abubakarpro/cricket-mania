import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTournamentData } from "../thunk/tournament.thunk";

const tournamentSlice = createSlice({
  name: "tournament",
  initialState: {
    data: [] as TornamentState[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTournamentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTournamentData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTournamentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default tournamentSlice.reducer;
