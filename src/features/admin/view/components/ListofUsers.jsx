import { Box, Typography } from "@mui/material";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";

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
            <Box
              key={user._id}
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
                    user.profilePic.startsWith("http")
                      ? user.profilePic
                      : `${ImageBaseURL}${user.profilePic}`
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
                    {user.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
                    {user.email}
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
        })}
    </Box>
  );
};

export default ListofUsers;
