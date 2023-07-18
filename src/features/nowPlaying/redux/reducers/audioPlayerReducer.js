import {
  getNextSongIndex,
  getPreviousSongIndex,
  toggleLoop,
  toggleMute,
  toggleShuffle,
} from "../../services/audioServices";

const initialState = {
  songList: [],
  songIndex: null,
  song: null,
  playing: false,
  volume: 50,
  muted: false,
  loop: false,
  shuffle: false,
  audioRef: null,
  timeProgress: 0,
  duration: 0,
};

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUDIO_REF":
      return {
        ...state,
        audioRef: action.audioRef,
      };
    case "SET_SONG_LIST":
      return {
        ...state,
        songList: action.songList,
      };
    case "SET_SONG_INDEX":
      return {
        ...state,
        songIndex: action.songIndex,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };
    case "TOGGLE_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.volume,
      };
    case "TOGGLE_MUTE":
      return {
        ...state,
        muted: toggleMute(state),
      };
    case "TOGGLE_LOOP":
      return {
        ...state,
        loop: toggleLoop(state),
      };
    case "TOGGLE_SHUFFLE":
      return {
        ...state,
        shuffle: toggleShuffle(state),
      };
    case "SET_NEXT_SONG":
      return {
        ...state,
        songIndex: getNextSongIndex(state),
      };
    case "SET_PREV_SONG":
      return {
        ...state,
        songIndex: getPreviousSongIndex(state),
      };
    case "SET_TIME_PROGRESS":
      return {
        ...state,
        timeProgress: action.timeProgress,
      };
    case "SET_DURATION":
      return {
        ...state,
        duration: action.duration,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
