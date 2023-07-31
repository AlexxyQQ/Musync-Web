import { BsMusicNoteBeamed } from "react-icons/bs";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import { Grid, Typography } from "@mui/material";
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
          <div>
            <BsMusicNoteBeamed />
          </div>
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
