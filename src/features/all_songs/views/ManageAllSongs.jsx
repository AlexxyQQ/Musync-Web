import { AiOutlineClockCircle, AiOutlinePlayCircle } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import getAllUserSongs from "../../dashboard/services/getAllUserSongs";
import { setAllUserSongs } from "../../dashboard/store/action/dashboardAction";
import { useEffect, useState } from "react";
import { DeleteForever } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import deleteSong from "../services/deleteSong";

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
const ManageAllSongs = () => {
  const { allUserSongs } = useSelector((state) => state.dashboard);

  const [loading, setLoading] = useState(false);
  const [sid, setSid] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const apiAllUserSongs = await getAllUserSongs();

      dispatch(setAllUserSongs(apiAllUserSongs));

      // Sort the songs by title
      allUserSongs.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch, allUserSongs]);

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteAccount = (id) => {
    setSid(id);
    setDeleteConfirmationOpen(true);
  };

  const confirmDeleteAccount = async () => {
    dispatch(setAllUserSongs(await deleteSong(sid)));
    allUserSongs.sort((a, b) => a.title.localeCompare(b.title));
    setDeleteConfirmationOpen(false);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        borderRadius: "10px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {loading ? (
        <Typography
          sx={{
            ml: 2,
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          Loading...
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography
            sx={{
              ml: 2,
              color: "#ffffff",
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            All Songs
          </Typography>
          <Box>
            <div className="mt-4">
              <TableContainer
                component={Paper}
                style={{ backgroundColor: "#333", color: "#fff" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Album</TableCell>
                      <TableCell>Date Added</TableCell>
                      <TableCell>Duration</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allUserSongs.map((song, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 rounded-md mr-2"
                              src={`${ImageBaseURL}${allUserSongs[index].albumArtUrl}`}
                              alt={song.title}
                            />
                            <span>{song.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>{song.album}</TableCell>
                        <TableCell>{formatDate(song.dateAdded)}</TableCell>
                        <TableCell>
                          {formatDuration(song.duration / 1000)}
                        </TableCell>
                        <TableCell>
                          <DeleteForever
                            onClick={() => handleDeleteAccount(song.id)}
                            style={{
                              color: "red",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Dialog
                open={deleteConfirmationOpen}
                onClose={closeDeleteConfirmation}
              >
                <DialogTitle>Confirm Song Deletion</DialogTitle>
                <DialogContent>
                  <Typography>
                    Are you sure you want to delete this song?
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
                    <Button onClick={closeDeleteConfirmation} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={confirmDeleteAccount} color="secondary">
                      Yes, Delete
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>
            </div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ManageAllSongs;
