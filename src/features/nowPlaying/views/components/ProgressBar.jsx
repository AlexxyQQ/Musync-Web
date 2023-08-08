import { Box, Slider, Typography } from "@mui/material";
import { setTimeProgress } from "../../redux/actions/audioPlayerActions";

const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  dispatch,
}) => {
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
    <div className="w-full relative rounded-full overflow-hidden flex items-center px-2">
      <input
        type="range"
        className="flex-1 h-1 rounded-full bg-gradient-to-r from-green-500 to-gray-300 appearance-none outline-none"
        value={timeProgress}
        max={duration}
        ref={progressBarRef}
        onChange={(e) => {
          dispatch(setTimeProgress(e.target.value));
          audioRef.current.currentTime = e.target.value;
        }}
        style={{
          background: `linear-gradient(to right, #34D399 0%, #34D399 ${
            (timeProgress / duration) * 100
          }%, #D1D5DB ${(timeProgress / duration) * 100}%, #D1D5DB 100%)`,
        }}
      />
      <span className="text-xs text-gray-400 ml-2">
        {formatTime(timeProgress)} / {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;
