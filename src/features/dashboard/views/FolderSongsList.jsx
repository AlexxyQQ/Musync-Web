import React from "react";
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
import { BaseURL, ImageBaseURL } from "../../../configs/ApiEndpoints";

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

const FolderSongsList = ({ folderSongs, selectedFolder }) => {
  console.log(selectedFolder);

  // Calculate the total duration in seconds
  const totalDurationInSeconds = folderSongs.reduce(
    (total, song) => total + song.duration / 1000,
    0
  );

  const totalDurationFormatted = formatDuration(totalDurationInSeconds);

  return (
    <div className="flex-col mx-6 mt-6">
      <div className="flex flex-row items-center space-x-6">
        <img
          className="h-64 w-64 rounded-lg shadow-md"
          src={`${ImageBaseURL}/${folderSongs[0].albumArtUrl}`}
          alt="Folder"
        />
        <div className="flex flex-col">
          <h1 className="text-6xl font-extrabold flex-auto">
            {selectedFolder}
          </h1>
          <div className="flex flex-row">
            <h1 className="text-xl font-sm flex-auto mt-8 text-gray-600">
              {folderSongs.length} songs •{" "}
            </h1>

            <div className="text-xl font-sm  mt-8 text-gray-600 flex items-center">
              {" "}
              <AiOutlineClockCircle className="h-6 w-6 mr-2 pl-1" />
              {totalDurationFormatted}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {folderSongs.map((song, index) => (
                <TableRow key={index} onClick={() => console.log(song.title)}>
                  <TableCell className="relative">
                    <div className="group cursor-pointer">
                      <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
                        <AiOutlinePlayCircle className="text-white text-4xl" />
                      </div>
                      {index + 1}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-md mr-2"
                        src={`${ImageBaseURL}/${folderSongs[index].albumArtUrl}`}
                        alt={song.title}
                      />
                      <span>{song.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{song.album}</TableCell>
                  <TableCell>{formatDate(song.dateAdded)}</TableCell>
                  <TableCell>{formatDuration(song.duration / 1000)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default FolderSongsList;
