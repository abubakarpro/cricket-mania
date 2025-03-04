import Duration from "@/components/common/HomeDetails/Duration/Duration";
import Area from "@/components/common/HomeDetails/Location/Area";
import Organizers from "@/components/common/HomeDetails/Organizers/Organizers";
import PrizeDetails from "@/components/common/HomeDetails/PrizeDetails/PrizeDetails";
import RegistrationFee from "@/components/common/HomeDetails/RegistrationFees/RegistrationFees";
import Teams from "@/components/common/HomeDetails/Team/Team";
import { Box, Typography, Button } from "@mui/material";

export default function PrizeBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1420px",
        margin: "auto",
        background: "#121212",
        color: "white",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1420px",
          margin: "auto",
        }}
      >
        <Box
          component="img"
          src="/Images/prize.png"
          alt="Winner Prize"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: "black",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            WINNER PRIZE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              background: "black",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "32px", sm: "48px", md: "64px" },
              paddingX: "10px",
              borderRadius: "5px",
            }}
          >
            100K
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
          paddingX: { xs: 2, sm: 4 },
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Avenir",
              whiteSpace: "nowrap",
            }}
          >
            The Devs Premier League
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Avenir",
              color: "white",
              fontSize: "14px",
              marginTop: 1,
            }}
          >
            Starting on 5th of March (10:00 PM - 02:00 AM)
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            background: "green",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: "bold",
            minWidth: "120px", // Ensures button is not too small
            whiteSpace: "nowrap", // Prevents button text from breaking
            "&:hover": { background: "#127C16" },
          }}
        >
          Share
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          marginTop: 4,
          padding: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 2fr" },
          gap: 2,
        }}
      >
        <Area />
        <Duration />
        <PrizeDetails />
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          padding: 2,
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <RegistrationFee />
        <Organizers />
      </Box>

      <Box sx={{ marginTop: 4, paddingX: 2 }}>
        <Teams />
      </Box>
    </Box>
  );
}
