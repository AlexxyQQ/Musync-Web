import { Box, Typography } from "@mui/material";
import {
  setAlbumPageTabVisible,
  setAllFolderWithSongs,
  setArtistPageTabVisible,
  setBrowsePageTabVisible,
  setFolderSongListTabVisible,
  setHomePageTabVisible,
  setQueueTabVisible,
  setSearchPageTabVisible,
  setSelectedFolder,
  setSelectedSongList,
} from "../../store/action/dashboardAction";

const FolderSection = ({ dispatch, foldersWithCover }) => {
  return (
    <>
      {/* Folder Section */}
      <Box mb={4}>
        <Typography variant="h4" mb={2} fontWeight="bold" color="white">
          Folders
        </Typography>
        <Box
          sx={{
            display: "grid",
            rowGap: "20px",
            gridTemplateColumns: "repeat(3, 1fr)",
            "@media (min-width: 701px) and (max-width: 1000px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@media (max-width:700px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
            "@media (min-width: 1001px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
          }}
        >
          {foldersWithCover.slice(0, 6).map((folder) => (
            <Box
              key={folder.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                mr: 4,
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#adadad",
                width: "350px",
                "@media (max-width: 700px)": {
                  width: "100%",
                  marginBottom: "16px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "80px",
                }}
              >
                <img
                  src={folder.cover}
                  alt={folder.name}
                  width={80}
                  height={80}
                  borderRadius="10px"
                />
                <button
                  className="font-medium text-lg mb-2 ml-4"
                  onClick={() => {
                    dispatch(setSelectedSongList(folder.songs));
                    dispatch(
                      setSelectedFolder(
                        folder.name.split("/")[
                          folder.name.split("/").length - 1
                        ]
                      )
                    );
                    dispatch(setFolderSongListTabVisible(true));
                    dispatch(setQueueTabVisible(false));
                    dispatch(setHomePageTabVisible(false));
                    dispatch(setBrowsePageTabVisible(false));
                    dispatch(setSearchPageTabVisible(false));
                    dispatch(setArtistPageTabVisible(true));
                    dispatch(setAlbumPageTabVisible(false));
                  }}
                >
                  {folder.name.split("/")[folder.name.split("/").length - 1]}
                </button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FolderSection;
