"use client";

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import teamImage from "@/public/Images/team.png";

import TournamentList from "@/components/common/TournamentList/TournamentList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchTournamentData } from "@/redux/thunk/tournament.thunk";

// const tournamentsToday = [
//   {
//     id: "1",
//     image: "/Images/team.png",
//     date: "02 Mar, 2025",
//     title: "Cricket Championship",
//     teams: "8 Teams",
//     location: "Arena, Johar Town",
//     time: "7:00 pm to 9:00 pm",
//     prize: "100K",
//   },
//   {
//     id: "2",
//     image: "/Images/team.png",
//     date: "02 Mar, 2025",
//     title: "Super League Finals",
//     teams: "6 Teams",
//     location: "Arena, Johar Town",
//     time: "7:00 pm to 9:00 pm",
//     prize: "100K",
//   },
// ];

// const upcomingTournaments = [
//   {
//     id: "3",
//     image: "/Images/team.png",
//     date: "05 Mar, 2025",
//     title: "T20 Premier Cup",
//     teams: "10 Teams",
//     location: "Arena, Johar Town",
//     time: "6:00 pm to 8:00 pm",
//     prize: "200K",
//   },
//   {
//     id: "4",
//     image: "/Images/team.png",
//     date: "07 Mar, 2025",
//     title: "Street Cricket Bash",
//     teams: "12 Teams",
//     location: "Arena, Johar Town",
//     time: "5:00 pm to 7:00 pm",
//     prize: "150K",
//   },
// ];

export default function HomeScreen() {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tournament
  );

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
    console.log("upcoming", upcomingTournaments);
  }, [upcomingTournaments]);

  useEffect(() => {
    dispatch(fetchTournamentData() as any)
      .then((res: any) => console.log("API Response:", res))
      .catch((err: any) => console.error("API Error:", err));
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
            Be a part of an <br /> Upcoming 🏏 Tournament
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
