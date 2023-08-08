import { useSelector } from "react-redux";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  setPlaying,
  setSongIndex,
  setSongList,
} from "../../redux/actions/audioPlayerActions";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import { Box, Typography } from "@mui/material";

const formatDuration = (durationInSeconds) => {
  const days = Math.floor(durationInSeconds / 86400);
  const hours = Math.floor((durationInSeconds % 86400) / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.round(durationInSeconds % 60);

  const parts = [];
  if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);

  return parts.join(", ");
};

const formatDate = (dateString) => {
  // Convert epoch timestamp to human-readable date
  const date = new Date(Number(dateString) * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const Queue = ({ queue, audioRef, dispatch }) => {
  const { selectedFolder } = useSelector((state) => state.dashboard);

  // Calculate the total duration in seconds
  const totalDurationInSeconds = queue?.reduce(
    (total, song) => total + song.duration / 1000,
    0
  );

  const totalDurationFormatted = formatDuration(totalDurationInSeconds);

  const formatSubtitle = (song) => {
    return `${song.artist} • ${song.album}`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #585858,#181818, #121212)",
        m: 1,
        p: 4,
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h3" sx={{ color: "white" }}>
          Queue
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {queue.length} songs •{" "}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AiOutlineClockCircle
              sx={{ height: 24, width: 24, mr: 1, ml: 1 }}
            />
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              {totalDurationFormatted}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: 4, py: 2 }}>
        {queue.map((song, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              py: 2,
              "&:hover": {
                backgroundColor: "gray.100",
                borderRadius: "9999px",
              },
              transition: "background-color 0.2s ease-out",
            }}
            onClick={() => {
              dispatch(setSongList(queue));
              dispatch(setSongIndex(index));
              audioRef.current?.play();
              dispatch(setPlaying(true));
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "9999px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`${ImageBaseURL}${song.albumArtUrl}`}
                alt={song.title}
              />
            </Box>
            <Box sx={{ ml: 4 }}>
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {song.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "white" }}>
                {formatSubtitle(song)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Queue;
