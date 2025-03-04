import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";

const Organizers = () => (
  <Card sx={{ backgroundColor: "#1E1E1E" }}>
    <CardContent>
      {/* Header Section */}
      <Box display="flex" alignItems="center" gap={1.5} flexWrap="wrap">
        <Person2Icon
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
          Organizers
        </Typography>
      </Box>

      {/* Divider Line */}
      <Box
        sx={{
          borderTop: "1px solid #159024",
          mt: { xs: 1, sm: 1.5, md: 2 },
          paddingTop: { xs: "6px", sm: "9px", md: "12px" },
        }}
      />

      {/* Organizers List & Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Organizers Names */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: "Avenir",
              color: "white",
              fontWeight: 350,
              mb: 1, // Spacing
            }}
          >
            John Doe
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: "Avenir",
              color: "white",
              fontWeight: 350,
            }}
          >
            John Doe
          </Typography>
        </Box>

        {/* Contact Button */}
        <Button
          variant="contained"
          sx={{
            background: "#159024",
            color: "white",
            padding: "8px 18px",
            borderRadius: "20px",
            textTransform: "none",
            minWidth: "100px",
          }}
        >
          Contact
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default Organizers;
