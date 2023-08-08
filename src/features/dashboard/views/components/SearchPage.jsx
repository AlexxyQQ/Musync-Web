import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  setPlaying,
  setSongIndex,
  setSongList,
} from "../../../nowPlaying/redux/actions/audioPlayerActions";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
const SearchPage = ({ allPublicSongs, allUserSongs, audioRef, dispatch }) => {
  const [filteredSong, setFilteredSong] = useState([]); // Initialize as an empty array

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target[0].value.toLowerCase();
    const combinedSongs = [...allPublicSongs, ...allUserSongs];

    if (searchValue !== "") {
      const filteredSongsSet = new Set();
      const filteredSongsArray = combinedSongs.filter((song) => {
        const lowerCaseTitle = song.title.toLowerCase();
        const includesSearchValue = lowerCaseTitle.includes(searchValue);
        if (includesSearchValue && !filteredSongsSet.has(lowerCaseTitle)) {
          filteredSongsSet.add(lowerCaseTitle);
          return true;
        }
        return false;
      });
      setFilteredSong(filteredSongsArray);
    } else {
      setFilteredSong([]); // Reset the filtered songs to an empty array
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "10px",
          background: "linear-gradient(180deg, #585858, #181818, #121212)",
          m: 1,
          p: 4,
        }}
      >
        <Typography variant="h4" mb={2} fontWeight="bold" color="white">
          Search
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "50px",
              m: 1,
              p: 2,
            }}
            fullWidth
            id="fullWidth"
            variant="filled"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>

        <Box>
          {filteredSong.map((song, index) => (
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
              key={song.id}
              onClick={() => {
                dispatch(setSongList(filteredSong));
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
                    color="white"
                  >
                    {song.title}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {`${song.artist} • ${song.album}`}
                  </Typography>
                </Box>
              </Box>
            </Button>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default SearchPage;
