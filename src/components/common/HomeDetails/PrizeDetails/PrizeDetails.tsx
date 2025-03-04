import { AccessTime, LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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
        <EmojiEventsIcon
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
          Winning Prize
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
          px: { xs: "14px", sm: "18px", md: "22px" },
        }}
      >
        <Box display="flex" flexDirection="column">
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: "Avenir",
              color: "#E1E1E1",
              fontWeight: 350,
              mb: 1,
            }}
          >
            Runner Up Prize
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: "bold",
              fontFamily: "Avenir",
              color: "white",
              lineHeight: "48px",
            }}
          >
            50K
          </Typography>
        </Box>

        {/* Winner Prize */}
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: "Avenir",
              color: "#E1E1E1",
              fontWeight: 350,
              mb: 1,
            }}
          >
            Winner Prize
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: "bold",
              fontFamily: "Avenir",
              color: "white",
              lineHeight: "48px",
            }}
          >
            100K
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default Area;
