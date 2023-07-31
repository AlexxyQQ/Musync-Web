import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllFolderWithSongs,
  setUser,
  setSelectedFolder,
  setSelectedSongList,
} from "../store/action/dashboardAction";
import initialLogin from "../services/initilalLoginController";
import getAllFolderWithSongs from "../services/getAllFolderWithSongs";
import FolderList from "../views/FolderList";
import FolderSongsList from "../views/FolderSongsList";
import Player from "../../nowPlaying/views/player";
import { useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const Dashboard = () => {
  const { loggedUser, allFolderWithSongs, selectedFolder, selectedSongList } =
    useSelector((state) => state.dashboard);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const audioRef = useRef();

  const fetchUser = async () => {
    try {
      const user = await initialLogin(navigate);
      const apiAllFolderWithSongs = await getAllFolderWithSongs();

      dispatch(setUser(user));
      dispatch(setAllFolderWithSongs(apiAllFolderWithSongs));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-fixed text-white">
      <div className="flex flex-row">
        <div className="h-screen flex-auto bg-gray-800 sticky top-0">
          <FolderList
            foldersWithSongs={allFolderWithSongs}
            setFolderSongs={setSelectedSongList}
            setSelectedFolder={setSelectedFolder}
            dispatch={dispatch}
          />
        </div>
        <div className="h-screen flex-auto w-[60%] bg-gray-900 overflow-y-auto">
          {selectedFolder && (
            <FolderSongsList
              folderSongs={selectedSongList}
              selectedFolder={selectedFolder}
              audioRef={audioRef}
            />
          )}
        </div>
      </div>

      {/* Fixed container for the player at the bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900">
        <Player
          songs={selectedSongList}
          audioRef={audioRef}
          loggedUser={loggedUser}
        />
      </div>
    </div>
  );
};

export default Dashboard;
