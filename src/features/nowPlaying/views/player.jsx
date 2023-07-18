import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
  IoShuffleSharp,
  IoShuffleOutline,
  IoRepeatSharp,
  IoRepeatOutline,
} from "react-icons/io5";
import { BsMusicNoteBeamed } from "react-icons/bs";

import {
  setAudioRef,
  setDuration,
  setLoop,
  setNextSong,
  setPlaying,
  setPrevSong,
  setShuffle,
  setSongList,
  setTimeProgress,
} from "../redux/actions/audioPlayerActions";
import { ImageBaseURL } from "../../../configs/ApiEndpoints";
import ProgressBar from "../views/ProgressBar";

const Player = ({ songs, audioRef }) => {
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
  } = useSelector((state) => state.ap);

  const dispatch = useDispatch();

  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  // Initialize the song list and song index when the component mounts
  useEffect(() => {
    dispatch(setSongList(songs));
    dispatch(setAudioRef(audioRef));
    progressBarRef.current.max = duration; // Set the progress bar max value
  }, [songs, audioRef, duration, dispatch]);

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    dispatch(setTimeProgress(currentTime));
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, dispatch]);

  // Play the audio when songIndex changes or when the component mounts
  useEffect(() => {
    if (songIndex !== null) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
      return () => {
        cancelAnimationFrame(playAnimationRef.current);
      };
    }
  }, [songIndex, playing, repeat, audioRef]);

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
    dispatch(setShuffle());
  };

  const handleLoop = () => {
    dispatch(setLoop());
  };

  // Check if the song exists at the current index before rendering the audio element
  const currentSong = songList[songIndex];
  const audioSource = currentSong
    ? `${ImageBaseURL}${currentSong.serverUrl}`
    : null;
  return (
    <div>
      {audioSource && (
        <audio
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
      <figure>
        <div>
          {currentSong?.albumArtUrl ? (
            <img
              src={`${ImageBaseURL}${currentSong?.albumArtUrl}`}
              alt="audio avatar"
            />
          ) : (
            <div>
              <span>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
          <figcaption>
            <p>{currentSong?.title}</p>
            <p>{currentSong?.author}</p>
          </figcaption>
        </div>
      </figure>
      <div>
        <button onClick={handleShuffle}>
          {shuffle ? (
            <IoShuffleSharp />
          ) : (
            <IoShuffleOutline style={{ color: "grey" }} />
          )}{" "}
        </button>

        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>

        <button onClick={handlePlayPause}>
          {playing ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>

        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>

        <button onClick={handleLoop}>
          {loop ? (
            <IoRepeatSharp />
          ) : (
            <IoRepeatOutline style={{ color: "grey" }} />
          )}
        </button>
      </div>
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
    </div>
  );
};

export default Player;
