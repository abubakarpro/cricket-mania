import { LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const Area = () => (
  <Card sx={{ backgroundColor: "#1E1E1E" }}>
    <CardContent>
      <Box
        display="flex"
        alignItems="center"
        gap={1.5}
        mt={{ xs: 0.5, sm: 1, md: 1.5 }}
        flexWrap="wrap"
      >
        <LocationOn
          sx={{
            color: "#7B7B7B",
            background: "black",
            borderRadius: "5px",
            padding: { xs: "3px", sm: "4px", md: "5px" },
            width: { xs: "22px", sm: "24px", md: "26px" },
            height: { xs: "22px", sm: "24px", md: "26px" },
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
          }}
        >
          Location
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={{ xs: 1, sm: 1.5, md: 2 }}
        flexWrap="wrap"
        sx={{
          borderTop: "1px solid #159024",
          paddingTop: { xs: "6px", sm: "9px", md: "12px" },
          mx: { xs: "-12px", sm: "-16px", md: "-20px" },
          px: { xs: "14px", sm: "18px", md: "22px" },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontFamily: "Avenir",
            color: "white",
            fontWeight: 350,
          }}
        >
          Area:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              fontFamily: "Avenir",
              color: "#A4A4A4",
            }}
          >
            Lahore
          </Typography>
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mt={{ xs: 1, sm: 1.5, md: 2 }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontFamily: "Avenir",
            color: "white",
            fontWeight: 350,
          }}
        >
          Ground:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              fontFamily: "Avenir",
              color: "#A4A4A4",
            }}
          >
            Arena grounds 1, F Block, Phase-II
          </Typography>
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Area;
