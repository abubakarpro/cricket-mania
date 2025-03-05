"use client";

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

import TournamentList from "@/components/common/TournamentList/TournamentList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchTournamentData } from "@/redux/thunk/tournament.thunk";
import { AppDispatch } from "@/redux/store";

export default function HomeScreen() {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.tournament);

  const [tornamentToday, setTornamentToday] = useState<TornamentState[]>([]);
  const [upcomingTournaments, setUpcomingTournaments] = useState<
    TornamentState[]
  >([]);

  useEffect(() => {
    if (data.length > 0) {
      console.log("data 83", data);
      setTornamentToday(
        data.filter(
          (tournament: TornamentState) => tournament.status === "TODAY"
        )
      );
      setUpcomingTournaments(
        data.filter(
          (tournament: TornamentState) => tournament.status === "UPCOMING"
        )
      );
    }
  }, [data]);

  useEffect(() => {
    dispatch(fetchTournamentData())
      .unwrap()
      .then((res: TornamentState[]) => console.log("API Response:", res))
      .catch((err: unknown) => console.error("API Error:", err));
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "400px", sm: "500px", md: "600px" },
        }}
      >
        <Box
          component="img"
          src="/Images/stadium.png"
          alt="Stadium"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />

        {/* Text & Search Box on Image */}
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            color: "white",
            width: { xs: "90%", sm: "50%", md: "40%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "20px", sm: "28px", md: "36px" },
              fontFamily: "Avenir LT Std",
            }}
          >
            Be a part of an <br /> Upcoming 🏏 Tournament !!
          </Typography>

          {/* Search Field */}
          <Box sx={{ marginTop: 2, display: "flex" }}>
            <TextField
              variant="outlined"
              placeholder="Select Venue"
              fullWidth
              sx={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "25px",
                width: { xs: "100%", sm: "80%" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  borderRadius: "25px",
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "lightgray" },
                },
                "& .MuiInputBase-input": {
                  padding: "12px 14px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-sta", mb: 2 }}>
          <Tabs
            value={tabIndex}
            onChange={(_, newValue) => setTabIndex(newValue)}
            textColor="inherit"
            sx={{
              background: "#111",
              borderRadius: "10px",
              p: 1,
              width: "fit-content",
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Today"
              sx={{
                color: tabIndex === 0 ? "#fff" : "gray",
                background: tabIndex === 0 ? "green" : "transparent",
                borderRadius: "10px",
                px: 3,
              }}
            />
            <Tab
              label="Upcoming"
              sx={{
                color: tabIndex === 1 ? "#fff" : "gray",
                background: tabIndex === 1 ? "green" : "transparent",
                borderRadius: "10px",
                px: 3,
              }}
            />
          </Tabs>
        </Box>

        {tabIndex === 0 ? (
          <TournamentList tournaments={tornamentToday} />
        ) : (
          <TournamentList tournaments={upcomingTournaments} />
        )}
      </Box>
    </Box>
  );
}
