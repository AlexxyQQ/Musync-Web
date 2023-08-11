import { Box, Typography } from "@mui/material";

const SongSection = ({ navigate }) => {
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
      {/* All songs */}
      <Box
        onClick={() => navigate("/songs")}
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
          All Songs
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
          View and Manage all your songs
        </Typography>
      </Box>

      {/* Public Songs */}
      {/* <Box
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
            Public Songs
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
            View and Manage all your public songs
          </Typography>
        </Box> */}
    </Box>
  );
};
export default SongSection;
