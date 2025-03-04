import { Box, Card, CardContent, Typography } from "@mui/material";
import TeamCard from "../TeamCard/TeamCard";
import GroupsIcon from "@mui/icons-material/Groups";

const Teams = () => (
  <Card sx={{ backgroundColor: "#1E1E1E" }}>
    <CardContent>
      <Box
        display="flex"
        alignItems="center"
        gap={1.5}
        mt={{ xs: 0.5, sm: 1, md: 1.5 }}
        flexWrap="wrap"
      >
        <GroupsIcon
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
          Teams
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
          Total Number of Teams:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              fontFamily: "Avenir",
              color: "white",
              fontWeight: "bold",
            }}
          >
            20
          </Typography>
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mt={{ xs: 1, sm: 1.5, md: 2 }}
      >
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
          Registered Teams
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "26px", md: "28px" },
            fontWeight: "bold",
            fontFamily: "Avenir",
            color: "white",
            lineHeight: "48px",
          }}
        >
          08
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        {[...Array(7)].map((_, i) => (
          <TeamCard key={i} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default Teams;
