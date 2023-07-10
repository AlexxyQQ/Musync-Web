import React from "react";
import { useDispatch } from "react-redux";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";

const FolderList = ({
  foldersWithSongs,
  setFolderSongs,
  setSelectedFolder,
  dispatch,
}) => {
  console.log(foldersWithSongs);
  return (
    <div>
      {Object.entries(foldersWithSongs).map(([folder, songs]) => (
        <div key={folder}>
          <div className="flex flex-row">
            <div className="h-20 w-20 bg-blue-300 rounded-lg">
              <img
                className="h-20 w-20 rounded-lg"
                src={`${ImageBaseURL}${songs[0].serverUrl.substring(
                  0,
                  songs[0].serverUrl.lastIndexOf("/")
                )}/${songs[0].albumArtUrl}`}
                alt="Folder"
              />
            </div>
            <button
              onClick={() => {
                dispatch(setFolderSongs(songs));
                dispatch(
                  setSelectedFolder(
                    folder.split("/")[folder.split("/").length - 1]
                  )
                );
              }}
            >
              {folder.split("/")[folder.split("/").length - 1]}
            </button>
          </div>

          {/* <ul>
            {songs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default FolderList;