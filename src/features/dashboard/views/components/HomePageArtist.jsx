import { Box, Typography } from "@mui/material";
import { BaseURL, ImageBaseURL } from "../../../../configs/ApiEndpoints";
import {
  setAlbumPageTabVisible,
  setArtistPageTabVisible,
  setBrowsePageTabVisible,
  setFolderSongListTabVisible,
  setHomePageTabVisible,
  setQueueTabVisible,
  setSearchPageTabVisible,
  setSelectedArtist,
  setSelectedSongList,
} from "../../store/action/dashboardAction";

const ArtistsSection = ({ artists, dispatch }) => {
  const Values = Object.values(artists).slice(0, 16);

  return (
    <>
      {/* Artist Section */}
      <Box
        mb={4}
        sx={{
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" mb={2} fontWeight="bold" color="white">
          Artists
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)", // 2 rows
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gridAutoFlow: "column",
            maxWidth: "100vw",
            gridGap: 26, // Adjust the gap between items
            overflowX: "auto", // Make it scrollable horizontally
            scrollBehavior: "smooth", // Smooth scrolling when using overflow
            scrollbarWidth: "none", // Hide scrollbar
            "&::-webkit-scrollbar": {
              // Hide scrollbar
              display: "none",
            },
            minWidth: "100vw",
          }}
        >
          {Values.map((artist) => (
            <Box
              onClick={() => {
                dispatch(setSelectedSongList(artists[artist[0].artist]));
                dispatch(setSelectedArtist(artist[0].artist));
                dispatch(setBrowsePageTabVisible(false));
                dispatch(setFolderSongListTabVisible(false));
                dispatch(setQueueTabVisible(false));
                dispatch(setHomePageTabVisible(false));
                dispatch(setArtistPageTabVisible(true));
                dispatch(setAlbumPageTabVisible(false));
                dispatch(setSearchPageTabVisible(false));
              }}
              key={artist[0].id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#171717",
                borderRadius: "10px",
                width: 180,
                height: 240,
              }}
            >
              <img
                src={ImageBaseURL + artist[0].albumArtUrl}
                alt={artist[0].name}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography color="white" mt="12px">
                {artist[0].artist}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ArtistsSection;
