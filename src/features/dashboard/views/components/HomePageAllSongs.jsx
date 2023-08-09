import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import {
  setPlaying,
  setSongIndex,
  setSongList,
} from "../../../nowPlaying/redux/actions/audioPlayerActions";
import { useSelector } from "react-redux";

const AllSongsSection = ({ allSongs, dispatch, audioRef }) => {
  const { songIndex, playing } = useSelector((state) => state.ap);

  // State to keep track of the sorting order and the current list of songs
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedSongs, setSortedSongs] = useState(allSongs);

  // Function to handle sorting the songs based on title
  const handleSortSongs = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const sortedSongs = allSongs.slice().sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    // Update the state with sorted songs and sorting order
    setSortOrder(newSortOrder);
    setSortedSongs(sortedSongs);
  };

  return (
    <Box>
      <Typography variant="h4" mb={2} fontWeight="bold" color="white">
        All Songs
      </Typography>

      {/* Sort Button */}
      <Button
        onClick={handleSortSongs}
        style={{ marginBottom: "16px", color: "grey" }}
      >
        Sort ({sortOrder === "asc" ? "A-Z" : "Z-A"})
      </Button>

      {sortedSongs.length !== 0 && (
        <Box>
          {sortedSongs.map((song, index) => (
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
              key={song.id}
              onClick={() => {
                dispatch(setSongList(sortedSongs));
                dispatch(setSongIndex(index));
                audioRef.current?.play();
                dispatch(setPlaying(true));
              }}
              disableRipple // Add the disableRipple prop here
              style={{ width: "100%", textAlign: "left" }}
            >
              <Box display="flex" alignItems="center" py={2}>
                <Box className=" bg-gray-300 rounded-full" mr={2}>
                  <img
                    src={ImageBaseURL + song.albumArtUrl}
                    alt={song.name}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    color={"white"}
                  >
                    {song.title}
                  </Typography>
                  <Typography variant="body2" color={"white"}>
                    {`${song.artist} • ${song.album}`}
                  </Typography>
                </Box>
              </Box>
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AllSongsSection;
