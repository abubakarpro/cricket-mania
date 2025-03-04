import { Card, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Groups, LocationOn, AccessTime } from "@mui/icons-material";

const TournamentCard: React.FC<{ tournament: TornamentState }> = ({
  tournament,
}) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        borderRadius: "15px",
        padding: { xs: "12px", sm: "18px", md: "24px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          gap: { xs: "12px", sm: "18px", md: "24px" },
        }}
      >
        <Box
          sx={{ mr: { xs: 1, sm: 2 }, width: "199.25px", height: "199.25px" }}
        >
          <Image
            src={
              tournament.tournamentImage
                ? tournament.tournamentImage
                : "/Images/team.png"
            }
            alt="Tournament"
            width="100"
            height={"100"}
            style={{ borderRadius: "10px", width: "100%", height: "100%" }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            sx={{
              position: "absolute",
              top: { xs: "5px", sm: "8px", md: "10px" },
              right: { xs: "5px", sm: "8px", md: "10px" },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#ccc",
            }}
          >
            {tournament.startDate}
          </Typography>

          <Box sx={{ mt: { xs: "20px", sm: "35px", md: "50px" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "18px", sm: "22px", md: "26px" },
                color: "#E1E1E1",
                fontWeight: 350,
              }}
            >
              {tournament.name}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mt={{ xs: 0.5, sm: 1, md: 1.5 }}
            >
              <Groups
                sx={{
                  color: "white",
                  background: "#7AB381",
                  borderRadius: "5px",
                  padding: { xs: "2px", sm: "3px", md: "4px" },
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#A4A4A4",
                  fontWeight: 350,
                }}
              >
                {tournament.registeredTeams}
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mt={{ xs: 0.5, sm: 1, md: 1.5 }}
            >
              <LocationOn
                sx={{
                  color: "white",
                  background: "#7AB381",
                  borderRadius: "5px",
                  padding: { xs: "2px", sm: "3px", md: "4px" },
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#A4A4A4",
                  fontWeight: 350,
                }}
              >
                {tournament.location}
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mt={{ xs: 0.5, sm: 1, md: 1.5 }}
            >
              <AccessTime
                sx={{
                  color: "white",
                  background: "#7AB381",
                  borderRadius: "5px",
                  padding: { xs: "2px", sm: "3px", md: "4px" },
                  width: "20px",
                  height: "20px",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#A4A4A4",
                  fontWeight: 350,
                }}
              >
                {tournament.endDate}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={{ xs: 1, sm: 1.5, md: 2 }}
        sx={{
          borderTop: "1px solid #7B7B7B",
          paddingTop: { xs: "5px", sm: "8px", md: "10px" },
          mx: "-22px",
          px: { xs: "12px", sm: "18px", md: "24px" },
        }}
      >
        <Typography
          fontWeight="bold"
          sx={{
            color: "#A4A4A4",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Winning Prize:{" "}
          <span style={{ color: "#159024" }}>{tournament.winnerPrize}</span>
        </Typography>
        <Button
          onClick={() => router.push("/tournament-details")}
          sx={{
            color: "#159024",
            textTransform: "none",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default TournamentCard;
