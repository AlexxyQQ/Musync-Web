import React from "react";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const FolderList = ({
  foldersWithSongs,
  setFolderSongs,
  setSelectedFolder,
  dispatch,
  toggleDrawer,
  drawer,
}) => {
  console.log(foldersWithSongs);
  return (
    <Box>
      <Button onClick={toggleDrawer}>click</Button>
      {Object.entries(foldersWithSongs).map(([folder, songs]) => (
        <div key={folder}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              width: drawer ? "80px" : "50px",
              height: drawer ? "80px" : "50px",
              my: 1,
              mx: 2,
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
              alt="Folder"
              height="60"
              width="60"
              image={`${ImageBaseURL}/${songs[0].albumArtUrl}`}
            />
          </Card>
          {drawer && (
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
          )}
        </div>
      ))}
    </Box>
  );
};

export default FolderList;
