import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import {
  DeleteForever,
  HomeOutlined,
  LogoutRounded,
} from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import getAllUsers from "../services/get_all_users";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import getUserData from "../services/get_user_data";

const AdminPannel = () => {
  const { loggedUser } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState(null);

  const fetchUser = async () => {
    try {
      const apiAllUsers = await getAllUsers();
      const userMap = {};

      await Promise.all(
        apiAllUsers.userList.map(async (user) => {
          const apiUserData = await getUserData(user._id);
          userMap[JSON.stringify(user)] = [
            apiUserData.allPublicSong,
            apiUserData.allSong,
          ];
        })
      );

      setAllUsers(userMap);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        background: "#111827",
        height: "100%",
      }}
    >
      <ToastContainer />
      {/* Nav Bar*/}
      <NavBar />
      {/* List of Users */}
      <ListofUsers allUsers={allUsers} />
      <ListofSongs allUsers={allUsers} />
    </Box>
  );
};

export default AdminPannel;

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        m: 1,
        p: 3,
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
        Admin Pannel
      </Typography>
    </Box>
  );
};
const ListofUsers = ({ allUsers }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        width: "100%",
        m: 1,
        p: 3,
      }}
    >
      {allUsers &&
        Object.keys(allUsers).map((userJSON) => {
          const [publicSongs, allSongs] = allUsers[userJSON];
          const user = JSON.parse(userJSON); // Parse the JSON string back to an object
          return (
            <UserItem
              key={user._id}
              profileImage={user.profilePic}
              name={user.username.toUpperCase()}
              email={user.email}
              allSongs={allSongs}
              publicSongs={publicSongs}
            />
          );
        })}
    </Box>
  );
};

const UserItem = ({ profileImage, name, email, allSongs, publicSongs }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        p: 2,
        borderBottom: "1px solid #303030",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={
            profileImage.startsWith("http")
              ? profileImage
              : `${ImageBaseURL}${profileImage}`
          }
          alt="User"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
            {email}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          Songs: {allSongs.length}
        </Typography>
        <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
          Public Songs: {publicSongs.length}
        </Typography>
      </Box>
    </Box>
  );
};

const ListofSongs = ({ allUsers }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        width: "100%",
        m: 1,
        p: 3,
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
        All Songs
      </Typography>
      ;
      {allUsers &&
        Object.keys(allUsers).map((userJSON) => {
          const [publicSongs, allSongs] = allUsers[userJSON];
          const user = JSON.parse(userJSON); // Parse the JSON string back to an object
          const uniqueSongs = [...new Set([...publicSongs, ...allSongs])]; // Combine and remove duplicates

          return (
            <SongItem
              songs={uniqueSongs.sort((a, b) => a.title.localeCompare(b.title))}
            />
          );
        })}
    </Box>
  );
};

const SongItem = ({ songs }) => {
  return songs.map((song) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          p: 2,
          borderBottom: "1px solid #303030",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={`${ImageBaseURL}${song.albumArtUrl}`}
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
              {song.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              {song.title}
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          Songs: {allSongs.length}
        </Typography>
        <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
          Public Songs: {publicSongs.length}
        </Typography>
      </Box> */}
      </Box>
    );
  });
};
