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
import { setUser } from "../../dashboard/store/action/dashboardAction";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import uploadProfilePic from "../services/upload_profile_pic";
import initialLogin from "../../dashboard/services/initilalLoginController";
import deleteProfile from "../services/delete_profile";
import NavBar from "./components/NavBar";
import ProfileSection from "./components/ProfileSection";
import AllSongsSection from "../../dashboard/views/components/HomePageAllSongs";
import SongSection from "./components/SongSection";
import AboutSection from "./components/AboutSection";

const Profile = () => {
  const { loggedUser } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const user = await initialLogin(navigate);

      dispatch(setUser(user));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  // State to manage the dialog visibility and selected picture
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  // Function to handle picture selection
  const handlePictureSelect = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setSelectedPicture(file);
    }
  };

  // Function to handle updating the profile picture path
  const updateProfilePicture = async () => {
    if (!selectedPicture) {
      return;
    }

    const updatedUser = await uploadProfilePic(selectedPicture);
    fetchUser();
    setDialogOpen(false);
    setSelectedPicture(null);
  };
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

      {/* Profile Section */}
      <ProfileSection
        loggedUser={loggedUser}
        setDialogOpen={setDialogOpen}
        navigate={navigate}
        dialogOpen={dialogOpen}
        handlePictureSelect={handlePictureSelect}
        updateProfilePicture={updateProfilePicture}
      />
      {/* Song Section */}
      <SongSection navigate={navigate} />
      {/* About Section */}
      <AboutSection />
    </Box>
  );
};

export default Profile;
