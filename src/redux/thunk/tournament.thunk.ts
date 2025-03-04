import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTournamentDataApi } from "../api/tournamentApi";

export const fetchTournamentData = createAsyncThunk(
  "tournament/fetchTournamentData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTournamentDataApi();
      return data;
    } catch (error) {
      console.error("Error fetching tournament data:", error);
      return rejectWithValue("Something went wrong");
    }
  }
);
