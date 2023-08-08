import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import { Grid } from "@mui/material";
import ProgressBar from "./ProgressBar";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

import {
  setAudioRef,
  setDuration,
  setLoop,
  setNextSong,
  setPlaying,
  setPrevSong,
  setShuffle,
  setSocket,
  setSongIndex,
  setSongList,
  setTimeProgress,
} from "../redux/actions/audioPlayerActions";
import AudioControls from "./AudioControls";
import SongDetails from "./SongDetails";
import {
  setFolderSongListTabVisible,
  setHomePageTabVisible,
  setQueueTabVisible,
} from "../../dashboard/store/action/dashboardAction";

const Player = ({ songs, audioRef, loggedUser }) => {
  const dispatch = useDispatch();

  const {
    songList,
    songIndex,
    playing,
    volume,
    muted,
    loop,
    shuffle,
    timeProgress,
    duration,
    socket,
  } = useSelector((state) => state.ap);

  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  // Initialize the song list and song index when the component mounts
  useEffect(() => {
    const s = io("http://localhost:3002", {
      query: { userEmail: loggedUser.email, uid: uuidv4() },
    });
    dispatch(setAudioRef(audioRef));
    dispatch(setSocket(s));
    progressBarRef.current.max = duration;
    return () => {
      s.disconnect();
    };
  }, [audioRef, duration, dispatch]);

  useEffect(() => {
    const handler = (data) => {
      console.log("asss");
      dispatch(setSongList(data.songList));
      dispatch(setSongIndex(data.songIndex));
      audioRef.current.play();

      if (data.playing) {
        audioRef.current.play();
      } else if (!data.playing && audioRef !== null) {
        audioRef.current.pause();
      }
    };
    socket?.on("shared-song", handler);

    return () => {
      socket?.off("shared-song", handler);
    };
  }, [socket, dispatch, audioRef, playing, progressBarRef]);

  // Play the audio when songIndex changes or when the component mounts
  useEffect(() => {
    if (songIndex !== null) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(updateProgressBar);
      return () => {
        cancelAnimationFrame(playAnimationRef.current);
      };
    }
  }, [songIndex, playing, audioRef]);

  // Update the progress bar
  const updateProgressBar = () => {
    const currentTime = audioRef.current.currentTime;
    dispatch(setTimeProgress(currentTime));
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(currentTime / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(updateProgressBar);
  };

  const handlePlayPause = () => {
    dispatch(setPlaying(!playing));
  };

  const handleNext = () => {
    dispatch(setNextSong());
  };

  const handlePrevious = () => {
    dispatch(setPrevSong());
  };

  const handleShuffle = () => {
    dispatch(setShuffle(!shuffle));
  };

  const handleLoop = () => {
    dispatch(setLoop(!loop));
  };

  // handleShare (send the current song to the server)
  const handleShare = () => {
    socket.emit("shared", {
      songList,
      songIndex,
      playing,
      volume,
      muted,
      loop,
      shuffle,
      timeProgress,
      duration,
    });

    if (playing) {
      audioRef.current.pause();
    }
  };

  // Check if the song exists at the current index before rendering the audio element
  const currentSong = songList[songIndex];
  const audioSource = currentSong?.serverUrl
    ? `${ImageBaseURL}${currentSong.serverUrl}`
    : null;

  return (
    <div>
      {audioSource && (
        <audio
          className="hidden"
          src={audioSource}
          ref={audioRef}
          onLoadedMetadata={() => {
            dispatch(setDuration(audioRef.current.duration));
            progressBarRef.current.max = audioRef.current.duration;
          }}
          onEnded={handleNext}
          muted={muted}
          volume={volume}
          loop={loop}
        />
      )}

      <div className="bg-black text-white h-24 fixed bottom-0 left-0 right-0 z-10">
        <Grid container className="h-full">
          <Grid item xs={5} className="flex items-center">
            <SongDetails currentSong={currentSong} />
          </Grid>
          <Grid item xs={5} className="flex items-center justify-start">
            <AudioControls
              {...{
                shuffle,
                handleShuffle,
                handlePrevious,
                handlePlayPause,
                playing,
                handleNext,
                handleLoop,
                loop,
                handleShare,
              }}
            />
          </Grid>
          <Grid item xs={2} className="flex items-center justify-center">
            <button
              className="focus:outline-none"
              onClick={() => {
                dispatch(setFolderSongListTabVisible(false));
                dispatch(setQueueTabVisible(true));
                dispatch(setHomePageTabVisible(false));
              }}
            >
              Queue
            </button>
          </Grid>
          <ProgressBar
            progressBarRef={progressBarRef}
            audioRef={audioRef}
            timeProgress={timeProgress}
            duration={duration}
            dispatch={dispatch}
          />
        </Grid>
      </div>
    </div>
  );
};

export default Player;
