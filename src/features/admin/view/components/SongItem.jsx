import { Box, Typography } from "@mui/material";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";

const SongItem = ({ allUsers }) => {
  return allUsers
    ? Object.keys(allUsers).map((userJSON) => {
        const [publicSongs, allSongs] = allUsers[userJSON];
        const user = JSON.parse(userJSON); // Parse the JSON string back to an object
        const uniqueSongs = [...new Set([...publicSongs, ...allSongs])]; // Combine and remove duplicates

        return uniqueSongs.map((song, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                p: 2,
                borderBottom: "1px solid #303030",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${ImageBaseURL}${song.albumArtUrl}`}
                  alt="User"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
                    {song.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
                    {song.artist}
                  </Typography>
                </Box>
              </Box>
              {/* <Box sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
              Songs: {allSongs.length}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Public Songs: {publicSongs.length}
            </Typography>
          </Box> */}
            </Box>
          );
        });
      })
    : null;
};

export default SongItem;
