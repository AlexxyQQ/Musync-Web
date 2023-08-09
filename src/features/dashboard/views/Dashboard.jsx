import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllFolderWithSongs,
  setUser,
  setAllArtistWithSongs,
  setAllAlbumWithSongs,
  setAllPublicSongs,
} from "../store/action/dashboardAction";
import initialLogin from "../services/initilalLoginController";
import getAllFolderWithSongs from "../services/getAllFolderWithSongs";
import FolderList from "./components/FolderList";
import FolderSongsList from "./components/FolderSongsList";
import Player from "../../nowPlaying/views/Player";
import Queue from "../../nowPlaying/views/components/Queue";
import HomePage from "./components/HomePage";
import { useRef } from "react";
import Box from "@mui/material/Box";
import getAllArtistWithSongs from "../services/getAllArtistWithSongs";
import getAllAlbumWithSongs from "../services/getAllAlbumWithSongs";
import getAllPublicSongs from "../services/getAllPublicSongs";
import BrowsePublic from "./components/BrowsePublic";
import ArtistSongsList from "./components/ArtistPage";
import AlbumSongsList from "./components/AlbumPage";
import SearchPage from "./components/SearchPage";

const Dashboard = () => {
  const {
    loggedUser,
    allFolderWithSongs,
    selectedFolder,
    selectedSongList,
    folderSongListTabVisible,
    queueTabVisible,
    homePageTabVisible,
    allPublicSongs,
    allUserSongs,
    browsePageTabVisible,
    artistPageTabVisible,
    albumPageTabVisible,
    searchPageTabVisible,
    selectedArtist,
  } = useSelector((state) => state.dashboard);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const audioRef = useRef();

  const [drawer, setDrawer] = useState(true); // Set to true if the screen width is greater than or equal to 720

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleResize = () => {
    if (window.innerWidth <= 720) {
      setDrawer(false);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await initialLogin(navigate);
      const apiAllFolderWithSongs = await getAllFolderWithSongs();
      const apiAllArtistWithSongs = await getAllArtistWithSongs();
      const apiAllAlbumWithSongs = await getAllAlbumWithSongs();
      const apiAllPublicSongs = await getAllPublicSongs();

      dispatch(setUser(user));
      dispatch(setAllFolderWithSongs(apiAllFolderWithSongs));
      dispatch(setAllArtistWithSongs(apiAllArtistWithSongs));
      dispatch(setAllAlbumWithSongs(apiAllAlbumWithSongs));
      dispatch(setAllPublicSongs(apiAllPublicSongs));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchUser();
  }, [dispatch, drawer]);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        height: "90vh",
        "&::-webkit-scrollbar": {
          width: "8px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          background: "#333", // Color of the track
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#666", // Color of the thumb (indicator)
        },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: "100%",
        }}
      >
        {/* sidebar */}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#212f4d",
            position: "sticky",
            top: 0,
            height: "100%",
          }}
        >
          <FolderList
            foldersWithSongs={allFolderWithSongs}
            dispatch={dispatch}
            toggleDrawer={toggleDrawer}
            drawer={drawer}
            browsePageTabVisible={browsePageTabVisible}
            searchPageTabVisible={searchPageTabVisible}
          />
        </Box>

        {/* Main content goes here */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            width: "100%",
            backgroundColor: "#111827", // Replace with your desired background color
          }}
        >
          {browsePageTabVisible && (
            <BrowsePublic
              allPublicSongs={allPublicSongs}
              dispatch={dispatch}
              audioRef={audioRef}
            />
          )}
          {homePageTabVisible && (
            <HomePage
              foldersWithSongs={allFolderWithSongs}
              dispatch={dispatch}
              audioRef={audioRef}
            />
          )}
          {folderSongListTabVisible && (
            <FolderSongsList
              folderSongs={selectedSongList}
              selectedFolder={selectedFolder}
              audioRef={audioRef}
            />
          )}
          {queueTabVisible && (
            <Queue
              audioRef={audioRef}
              queue={selectedSongList}
              dispatch={dispatch}
            />
          )}
          {artistPageTabVisible && (
            <ArtistSongsList
              folderSongs={selectedSongList}
              selectedFolder={selectedArtist}
              audioRef={audioRef}
              dispatch={dispatch}
            />
          )}
          {albumPageTabVisible && (
            <AlbumSongsList
              folderSongs={selectedSongList}
              selectedFolder={selectedArtist}
              audioRef={audioRef}
              dispatch={dispatch}
            />
          )}
          {searchPageTabVisible && (
            <SearchPage
              allUserSongs={allUserSongs}
              allPublicSongs={allPublicSongs}
              audioRef={audioRef}
              dispatch={dispatch}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#1f1f1f1",
        }}
      >
        <Player
          songs={selectedSongList}
          audioRef={audioRef}
          loggedUser={loggedUser}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
