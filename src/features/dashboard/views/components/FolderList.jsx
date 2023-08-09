import React, { useState } from "react";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import { AccountCircle, Language, SortByAlpha } from "@mui/icons-material";
import {
  setAlbumPageTabVisible,
  setArtistPageTabVisible,
  setBrowsePageTabVisible,
  setFolderSongListTabVisible,
  setHomePageTabVisible,
  setQueueTabVisible,
  setSearchPageTabVisible,
  setSelectedFolder,
  setSelectedSongList,
} from "../../store/action/dashboardAction";
import { AiFillProfile } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FolderList = ({
  foldersWithSongs,
  dispatch,
  toggleDrawer,
  drawer,
  browsePageTabVisible,
  searchPageTabVisible,
}) => {
  const [ascendingSort, setAscendingSort] = useState(true); // Track the sorting order
  const { loggedUser } = useSelector((state) => state.dashboard);
  const sortedFolderList = () => {
    // Get an array of keys and sort them alphabetically
    const sortedKeys = Object.keys(foldersWithSongs).sort((a, b) =>
      a.localeCompare(b)
    );

    if (!ascendingSort) {
      sortedKeys.reverse(); // Reverse the order for descending sort
    }

    // Map through the sorted keys to display the folders in alphabetical order
    return sortedKeys.map((folder) => (
      <button
        key={folder}
        onClick={() => {
          dispatch(setSelectedSongList(foldersWithSongs[folder]));
          dispatch(setSelectedFolder(folder.split("/").pop()));
          dispatch(setFolderSongListTabVisible(true));
          dispatch(setQueueTabVisible(false));
          dispatch(setHomePageTabVisible(false));
          dispatch(setBrowsePageTabVisible(false));
          dispatch(setArtistPageTabVisible(false));
          dispatch(setAlbumPageTabVisible(false));
          dispatch(setSearchPageTabVisible(false));
        }}
        style={{
          textDecoration: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: drawer ? "normal" : "center", // Center content when drawer is false
          width: "100%",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: drawer ? "48px" : "56px",
            height: drawer ? "48px" : "56px",
            my: 1,
            mx: 1,
            borderRadius: "8px",
          }}
        >
          <CardMedia
            component="img"
            alt="Folder"
            height={drawer ? "48px" : "56px"}
            width={drawer ? "48px" : "56px"}
            image={`${ImageBaseURL}/${foldersWithSongs[folder][0].albumArtUrl}`}
          />
        </Card>
        {drawer && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "bold", color: "#fff" }}
            >
              {folder.split("/").pop()}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6a6a6a" }}>
              Folder • {foldersWithSongs[folder].length} songs
            </Typography>
          </Box>
        )}
      </button>
    ));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        width: drawer ? "325px" : "120px",
        backgroundColor: "#111827",
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          flex: "10%",
          display: "flex",
          flexDirection: "column",
          alignItems: drawer ? "start" : "center",
          backgroundColor: "#121212",
          borderRadius: "20px",
          m: 1,
          paddingY: "12px",
        }}
      >
        <Button
          disableRipple
          sx={{ color: "#fff", mx: 2 }}
          onClick={() => {
            dispatch(setBrowsePageTabVisible(false));
            dispatch(setFolderSongListTabVisible(false));
            dispatch(setQueueTabVisible(false));
            dispatch(setHomePageTabVisible(true));
            dispatch(setArtistPageTabVisible(false));
            dispatch(setAlbumPageTabVisible(false));
            dispatch(setSearchPageTabVisible(false));
          }}
        >
          <HomeIcon
            sx={{
              width: drawer ? "28px" : "34px",
              height: drawer ? "28px" : "34px",
            }}
          />
          {drawer && <Typography sx={{ ml: 2 }}>Home</Typography>}
        </Button>
        <Button
          disableRipple
          sx={{ color: "#fff", mt: 1, mx: 2 }}
          onClick={() => {
            if (browsePageTabVisible) {
              dispatch(setBrowsePageTabVisible(false));
              dispatch(setFolderSongListTabVisible(false));
              dispatch(setQueueTabVisible(false));
              dispatch(setHomePageTabVisible(true));
              dispatch(setArtistPageTabVisible(false));
              dispatch(setAlbumPageTabVisible(false));
              dispatch(setSearchPageTabVisible(false));
            } else {
              dispatch(setBrowsePageTabVisible(false));
              dispatch(setFolderSongListTabVisible(false));
              dispatch(setQueueTabVisible(false));
              dispatch(setHomePageTabVisible(false));
              dispatch(setArtistPageTabVisible(false));
              dispatch(setAlbumPageTabVisible(false));
              dispatch(setSearchPageTabVisible(true));
            }
          }}
        >
          <SearchIcon
            sx={{
              width: drawer ? "28px" : "34px",
              height: drawer ? "28px" : "34px",
            }}
          />
          {drawer && <Typography sx={{ ml: 2 }}>Search</Typography>}
        </Button>
        <Button
          disableRipple
          sx={{ color: "#fff", mt: 1, mx: 2 }}
          onClick={() => {
            if (browsePageTabVisible) {
              dispatch(setBrowsePageTabVisible(false));
              dispatch(setFolderSongListTabVisible(false));
              dispatch(setQueueTabVisible(false));
              dispatch(setHomePageTabVisible(true));
              dispatch(setArtistPageTabVisible(false));
              dispatch(setAlbumPageTabVisible(false));
              dispatch(setSearchPageTabVisible(false));
            } else {
              dispatch(setBrowsePageTabVisible(true));
              dispatch(setFolderSongListTabVisible(false));
              dispatch(setQueueTabVisible(false));
              dispatch(setHomePageTabVisible(false));
              dispatch(setArtistPageTabVisible(false));
              dispatch(setAlbumPageTabVisible(false));
              dispatch(setSearchPageTabVisible(false));
            }
          }}
        >
          <Language
            sx={{
              width: drawer ? "28px" : "34px",
              height: drawer ? "28px" : "34px",
            }}
          />
          {drawer && <Typography sx={{ ml: 2 }}>Browse</Typography>}
        </Button>
        <Button disableRipple sx={{ color: "#fff", mt: 1, mx: 2 }}>
          {localStorage.getItem("token") && loggedUser.profilePic ? (
            <img
              src={
                loggedUser.profilePic.startsWith("http")
                  ? loggedUser.profilePic
                  : `${ImageBaseURL}${loggedUser.profilePic}`
              }
              width={drawer ? "28px" : "34px"}
              height={drawer ? "28px" : "34px"}
              style={{ borderRadius: "50%" }}
              alt="Profile"
            />
          ) : (
            <p>No Profile Picture</p>
          )}
          <Link to={"/account"}>
            <Typography sx={{ ml: 2 }}>{loggedUser.username} </Typography>
          </Link>
        </Button>
      </Box>
      {/* Library */}
      <Box
        sx={{
          flex: "90%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#121212",
          borderRadius: "20px",
          m: 1,
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            onClick={toggleDrawer}
            disableRipple
            sx={{ color: "#fff", mx: 2, mb: 4, mt: 1 }}
          >
            <LibraryMusicRoundedIcon
              sx={{
                width: drawer ? "28px" : "34px",
                height: drawer ? "28px" : "34px",
              }}
            />
            {drawer && <Typography sx={{ ml: 2 }}>Your Library</Typography>}
          </Button>
          {drawer && (
            <Button
              onClick={() => setAscendingSort(!ascendingSort)}
              disableRipple
              sx={{ color: "#fff", mx: 2, mb: 4, mt: 1 }}
            >
              <SortByAlpha
                sx={{
                  width: "28px",
                  height: "28px",
                }}
              />
            </Button>
          )}
        </Box>

        {sortedFolderList()}
      </Box>
    </Box>
  );
};

export default FolderList;
