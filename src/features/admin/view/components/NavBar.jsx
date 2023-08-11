import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      <Typography
        sx={{
          ml: 2,
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Admin Pannel
      </Typography>
    </Box>
  );
};

export default NavBar;
