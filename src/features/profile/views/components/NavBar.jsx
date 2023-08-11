import { HomeOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {/* Home button on top left */}
      <Link to={"/dashboard"}>
        <HomeOutlined
          style={{
            color: "#ffffff",
            fontSize: "28px",
            left: "0px",
          }}
        />
      </Link>
      <Typography
        sx={{
          ml: 2,
          flex: 1 / 2,
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Profile
      </Typography>
    </Box>
  );
};

export default NavBar;
