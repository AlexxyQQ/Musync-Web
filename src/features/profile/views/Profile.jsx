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

const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {/* Home button on top left */}
      <Link to={"/dashboard"}>
        <HomeOutlined
          style={{
            color: "#ffffff",
            fontSize: "28px",
            left: "0px",
          }}
        />
      </Link>
      <Typography
        sx={{
          ml: 2,
          flex: 1 / 2,
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        Profile
      </Typography>
    </Box>
  );
};

const ProfileSection = ({
  loggedUser,
  setDialogOpen,
  navigate,
  dialogOpen,
  handlePictureSelect,
  updateProfilePicture,
}) => {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteAccount = () => {
    setDeleteConfirmationOpen(true);
  };

  const confirmDeleteAccount = async () => {
    await deleteProfile();
    navigate("/login");
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          gap: "32px",
          borderRadius: "10px",
          background: "#121212",
          m: 1,
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
          }}
        >
          {/* Circular image of user */}
          <img
            src={
              loggedUser.profilePic.startsWith("http")
                ? loggedUser.profilePic
                : `${ImageBaseURL}${loggedUser.profilePic}`
            }
            width={"80px"}
            height={"80px"}
            style={{ borderRadius: "50%", marginLeft: "2px" }}
            alt={loggedUser?.username}
            onClick={() => setDialogOpen(true)}
          />

          {/* Name and email of user */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{ ml: 2, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
            >
              {loggedUser?.username?.toUpperCase()}
            </Typography>

            <Typography
              sx={{
                ml: 2,
                mt: 1,
                color: "grey",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Click on the Profile Picture to change it
            </Typography>
          </Box>
        </Box>

        {/* Email  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Typography
            sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
          >
            Email
          </Typography>
          <Typography
            sx={{ ml: 1, color: "grey", fontSize: 14, fontWeight: 400 }}
          >
            {loggedUser?.email}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
            >
              Logout
            </Typography>

            <Button
              sx={{
                fontSize: 14,
                fontWeight: 400,
              }}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              <LogoutRounded
                style={{
                  color: "#ffffff",
                }}
              />
            </Button>
          </Box>

          <Typography
            sx={{ ml: 1, color: "grey", fontSize: 14, fontWeight: 400 }}
          >
            Click on the Logout button to logout
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
            >
              Delete Account
            </Typography>

            <Button
              sx={{
                fontSize: 14,
                fontWeight: 400,
              }}
              onClick={handleDeleteAccount}
            >
              <DeleteForever
                style={{
                  color: "red",
                }}
              />
            </Button>
          </Box>

          <Typography
            sx={{ ml: 1, color: "grey", fontSize: 14, fontWeight: 400 }}
          >
            Click on the Delete button to delete your account permanently
          </Typography>
          <Dialog
            open={deleteConfirmationOpen}
            onClose={closeDeleteConfirmation}
          >
            <DialogTitle>Confirm Account Deletion</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to delete your account?
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button onClick={closeDeleteConfirmation} color="primary">
                  Cancel
                </Button>
                <Button onClick={confirmDeleteAccount} color="secondary">
                  Yes, Delete
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Select Profile Picture</DialogTitle>
        <DialogContent>
          <input type="file" accept="image/*" onChange={handlePictureSelect} />
          <Button onClick={updateProfilePicture}>Update Picture</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const SongSection = ({ navigate }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        borderRadius: "10px",
        gap: "32px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {/* All songs */}
      <Box
        onClick={() => navigate("/songs")}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          All Songs
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          View and Manage all your songs
        </Typography>
      </Box>

      {/* Public Songs */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Public Songs
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          View and Manage all your public songs
        </Typography>
      </Box> */}
    </Box>
  );
};

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        borderRadius: "10px",
        gap: "32px",
        background: "#121212",
        m: 1,
        p: 3,
      }}
    >
      {/* Version */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Version
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Musync 1.0.0-beta ('local')
        </Typography>
      </Box>

      {/* About Us */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about us
        </Typography>
      </Box>

      {/* Privacy policy */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about our privacy policy
        </Typography>
      </Box>
      {/* Terms and Conditions */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography
          sx={{ ml: 1, color: "#ffffff", fontSize: 20, fontWeight: 800 }}
        >
          Terms and Conditions
        </Typography>
        <Typography
          sx={{
            ml: 1,
            mt: 1,
            color: "grey",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Know more about our terms and conditions
        </Typography>
      </Box>
    </Box>
  );
};
