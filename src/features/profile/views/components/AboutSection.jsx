import { Box, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        borderRadius: "10px",
        gap: "32px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {/* Version */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Version
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Musync 1.0.0-beta ('local')
        </Typography>
      </Box>

      {/* About Us */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about us
        </Typography>
      </Box>

      {/* Privacy policy */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about our privacy policy
        </Typography>
      </Box>
      {/* Terms and Conditions */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Terms and Conditions
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about our terms and conditions
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
