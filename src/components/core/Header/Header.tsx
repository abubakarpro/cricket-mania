import { Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 4 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          ml: { xs: -1, sm: -2, md: -3 },
        }}
      >
        <MenuIcon
          fontSize="large"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
          }}
        />
      </Box>

      <Box
        onClick={() => router.push("/")}
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: { xs: "150px", sm: "180px", md: "300px" },
        }}
      >
        <Image
          src="/Images/logo.svg"
          alt="Logo"
          width={100}
          height={51}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default Header;
