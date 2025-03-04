import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import GroupIcon from "@mui/icons-material/Group";

import type { RootState } from "../../../../redux/store";
import { fetchTournamentData } from "@/redux/thunk/tournament.thunk";

const TeamCard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tournament
  );

  useEffect(() => {
    dispatch(fetchTournamentData() as any)
      .then((res: any) => console.log("API Response:", res))
      .catch((err: any) => console.error("API Error:", err));
  }, [dispatch]);
  return (
    <Card
      sx={{
        backgroundColor: "black",
        borderRadius: "12px",
        padding: "12px",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component="img"
          src="/Images/team.png"
          alt="Team"
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              color: "white",
            }}
          >
            Team Name
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <SportsCricketIcon sx={{ color: "#7B7B7B", fontSize: "18px" }} />
            <Typography sx={{ fontSize: "14px", color: "#A4A4A4" }}>
              Muhammad Ali
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mt={0.5}>
            <GroupIcon sx={{ color: "#7B7B7B", fontSize: "18px" }} />
            <Typography sx={{ fontSize: "14px", color: "#A4A4A4" }}>
              11 Players
            </Typography>
          </Box>

          <Button
            variant="text"
            sx={{
              color: "#159024",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              mt: 1,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
