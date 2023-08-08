export const toggleMute = (state) => {
  const { muted } = state;
  return !muted;
};

export const toggleLoop = (state) => {
  const { loop } = state;
  return !loop;
};

export const getNextSongIndex = (state) => {
  const { songList, songIndex, loop, audioRef } = state;
  let nextIndex;

  if (songList.length >= songIndex + 1) {
    nextIndex = songIndex + 1;
    if (loop) {
      nextIndex = songIndex;
      if (audioRef != null) {
        audioRef.current.currentTime = 0;
      }
    }
  } else {
    nextIndex = 0;
  }

  return nextIndex;
};

export const getPreviousSongIndex = (state) => {
  const { songList, songIndex, loop, audioRef } = state;
  let previousIndex;

  if (loop) {
    previousIndex = songIndex;
    if (audioRef != null) {
      audioRef.current.currentTime = 0;
    }
  } else {
    previousIndex = songIndex - 1;
    if (previousIndex < 0) {
      previousIndex = songList.length - 1;
    }
  }
  return previousIndex;
};

export const toggleShuffle = (state) => {
  const { shuffle, songList } = state;
  let shuffled;

  if (shuffle) {
    songList.sort((a, b) => a.title - b.title);
    shuffled = false;
  } else {
    songList.sort(() => Math.random() - 0.5);
    shuffled = true;
  }

  return shuffled;
};
