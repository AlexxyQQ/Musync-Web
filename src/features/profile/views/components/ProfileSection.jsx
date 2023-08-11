import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import { useState } from "react";
import { DeleteForever, LogoutRounded } from "@mui/icons-material";

const ProfileSection = ({
  loggedUser,
  setDialogOpen,
  navigate,
  dialogOpen,
  handlePictureSelect,
  updateProfilePicture,
}) => {
  console.log("first", loggedUser);
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

export default ProfileSection;
