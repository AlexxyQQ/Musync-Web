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

const Dashboard = () => {
  const { loggedUser, allFolderWithSongs, selectedFolder, selectedSongList } =
    useSelector((state) => state.dashboard);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
    <div>
      <div className="flex flex-row">
        <div className="h-screen flex-auto bg-red-300 ">
          <FolderList
            foldersWithSongs={allFolderWithSongs}
            setFolderSongs={setSelectedSongList}
            setSelectedFolder={setSelectedFolder}
            dispatch={dispatch}
          />
        </div>
        <div className="h-screen flex-auto w-[60%] bg-orange-300">
          {selectedFolder && (
            <FolderSongsList
              folderSongs={selectedSongList}
              selectedFolder={selectedFolder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
