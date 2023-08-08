import { BsMusicNoteBeamed } from "react-icons/bs";
import { ImageBaseURL } from "../../../../configs/ApiEndpoints";
import { Box, Grid, Typography } from "@mui/material";
const SongDetails = ({ currentSong }) => {
  return (
    <>
      <Grid item>
        {currentSong?.albumArtUrl ? (
          <img
            src={`${ImageBaseURL}${currentSong?.albumArtUrl}`}
            alt="audio avatar"
            width="60px"
            height="60px"
            style={{ borderRadius: "10%", margin: "10px" }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 60,
              height: 60,
              borderRadius: "15px",
              backgroundColor: "#171717",
              justifyContent: "center",
              marginX: "10px",
            }}
          >
            <BsMusicNoteBeamed
              style={{
                color: "#ffc800",
                fontSize: "30px",
              }}
            />
          </Box>
        )}
      </Grid>
      <Grid item>
        <Typography variant="h6">{currentSong?.title}</Typography>
        <Typography variant="subtitle1">{currentSong?.artist}</Typography>
      </Grid>
    </>
  );
};

export default SongDetails;
