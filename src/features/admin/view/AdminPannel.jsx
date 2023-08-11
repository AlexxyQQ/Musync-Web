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
import getUserData from "../services/get_user_data";
import NavBar from "./components/NavBar";
import ListofUsers from "./components/ListofUsers";
import SongItem from "./components/SongItem";

const AdminPannel = () => {
  const { loggedUser } = useSelector((state) => state.dashboard);

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
      <SongItem allUsers={allUsers} />
    </Box>
  );
};

export default AdminPannel;
