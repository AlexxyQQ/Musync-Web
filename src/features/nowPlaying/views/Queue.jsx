import { useSelector } from "react-redux";
import { AiOutlineClockCircle, AiOutlinePlayCircle } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import {
  setPlaying,
  setSongIndex,
  setSongList,
} from "../redux/actions/audioPlayerActions";

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
    <div className="flex-col mx-6 mt-6">
      <div className="flex flex-row items-center space-x-6">
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold flex-auto">Queue</h1>
          <div className="flex flex-row">
            <h1 className="text-xl font-sm flex-auto mt-8 text-gray-600">
              {queue.length} songs •{" "}
            </h1>

            <div className="text-xl font-sm  mt-8 text-gray-600 flex items-center">
              {" "}
              <AiOutlineClockCircle className="h-6 w-6 mr-2 pl-1" />
              {totalDurationFormatted}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        {queue.map((song, index) => (
          <div
            key={index}
            className="flex items-center py-2 hover:bg-gray-100 hover:rounded-full transition duration-200 ease-out"
            onClick={() => {
              dispatch(setSongList(queue));
              dispatch(setSongIndex(index));
              audioRef.current?.play();
              dispatch(setPlaying(true));
            }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`${ImageBaseURL}${song.albumArtUrl}`}
                alt={song.title}
              />
            </div>
            <div className="ml-4">
              <div className="font-bold text-lg">{song.title}</div>
              <div className="text-gray-500 text-md">
                {formatSubtitle(song)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
