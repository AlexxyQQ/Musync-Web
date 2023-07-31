import React from "react";
import {
  Pause,
  PlayArrow,
  Repeat,
  RepeatOutlined,
  Share,
  Shuffle,
  ShuffleOutlined,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Grid, IconButton, createTheme, ThemeProvider } from "@mui/material";

const AudioControls = ({
  shuffle,
  handleShuffle,
  handlePrevious,
  handlePlayPause,
  playing,
  handleNext,
  handleLoop,
  loop,
  handleShare,
}) => {
  // Define a custom theme with yellow as the active icon color
  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "white",
            "&.active": {
              color: "yellow",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid item>
        <IconButton
          onClick={handleShuffle}
          className={shuffle ? "active" : ""}
          size="big"
        >
          {shuffle ? <Shuffle /> : <ShuffleOutlined />}
        </IconButton>

        <IconButton onClick={handlePrevious} size="big">
          <SkipPrevious />
        </IconButton>

        <IconButton onClick={handlePlayPause} size="big">
          {playing ? <Pause /> : <PlayArrow />}
        </IconButton>

        <IconButton onClick={handleNext} size="big">
          <SkipNext />
        </IconButton>

        <IconButton
          onClick={handleLoop}
          className={loop ? "active" : ""}
          size="big"
        >
          {loop ? <Repeat /> : <RepeatOutlined />}
        </IconButton>
        <IconButton onClick={handleShare} size="big">
          <Share />
        </IconButton>
      </Grid>
    </ThemeProvider>
  );
};

export default AudioControls;
