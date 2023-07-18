export const setAudioRef = (audioRef) => ({
  type: "SET_AUDIO_REF",
  audioRef,
});

export const setSongList = (songList) => ({
  type: "SET_SONG_LIST",
  songList,
});

export const setSongIndex = (songIndex) => ({
  type: "SET_SONG_INDEX",
  songIndex,
});

export const setSong = (song) => ({
  type: "SET_SONG",
  song,
});

export const setPlaying = (playing) => ({
  type: "TOGGLE_PLAYING",
  playing,
});

export const setVolume = (volume) => ({
  type: "SET_VOLUME",
  volume,
});

export const setMuted = (muted) => ({
  type: "TOGGLE_MUTE",
  muted,
});

export const setLoop = (loop) => ({
  type: "TOGGLE_LOOP",
  loop,
});

export const setShuffle = (shuffle) => ({
  type: "TOGGLE_SHUFFLE",
  shuffle,
});

export const setNextSong = (songIndex) => ({
  type: "SET_NEXT_SONG",
  songIndex,
});

export const setPrevSong = (songIndex) => ({
  type: "SET_PREV_SONG",
  songIndex,
});

export const setTimeProgress = (timeProgress) => ({
  type: "SET_TIME_PROGRESS",
  timeProgress,
});

export const setDuration = (duration) => ({
  type: "SET_DURATION",
  duration,
});

export const resetState = () => ({
  type: "RESET_STATE",
});
