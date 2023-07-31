import { Box, Slider, Typography } from "@mui/material";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    timeProgress = newValue;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="body2">{formatTime(timeProgress)}</Typography>

      <Slider
        value={timeProgress}
        variant="determinate"
        aria-label="Song Progress"
        min={0}
        max={duration || 0}
        onChange={handleProgressChange}
        onChangeCommitted={handleProgressChange}
        ref={progressBarRef}
        sx={{ mx: 1, width: 200 }}
      />
      <Typography variant="body2">{formatTime(duration)}</Typography>
    </Box>
  );
};

export default ProgressBar;
