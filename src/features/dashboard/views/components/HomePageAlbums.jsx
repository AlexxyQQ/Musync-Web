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

const AlbumsSection = ({ albums, dispatch }) => {
  const Values = Object.values(albums).slice(0, 16);

  return (
    <>
      {/* albums Section */}
      <Box
        mb={4}
        sx={{
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" mb={2} fontWeight="bold" color="white">
          albums
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
          {Values.map((album) => (
            <Box
              onClick={() => {
                dispatch(setSelectedSongList(albums[album[0].album]));
                dispatch(setSelectedArtist(album[0].album));
                dispatch(setBrowsePageTabVisible(false));
                dispatch(setFolderSongListTabVisible(false));
                dispatch(setQueueTabVisible(false));
                dispatch(setHomePageTabVisible(false));
                dispatch(setArtistPageTabVisible(true));
                dispatch(setAlbumPageTabVisible(false));
                dispatch(setSearchPageTabVisible(false));
              }}
              key={album[0].id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#272727",
                borderRadius: "10px",
                width: 180,
                height: 240,
              }}
            >
              <img
                src={ImageBaseURL + album[0].albumArtUrl}
                alt={album[0].name}
                style={{
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Typography
                color="white"
                mt="12px"
                maxWidth={160}
                textOverflow={"ellipsis"}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {album[0].album}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AlbumsSection;
