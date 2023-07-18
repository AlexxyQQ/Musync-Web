export const setUser = (loggedUser) => ({
  type: "SET_USER",
  loggedUser,
});

export const setAllFolderWithSongs = (allFolderWithSongs) => ({
  type: "ALL_FOLDER_WITH_SONGS",
  allFolderWithSongs,
});

export const setSelectedFolder = (selectedFolder) => ({
  type: "SELECTED_FOLDER",
  selectedFolder,
});

export const setSelectedSongList = (selectedSongList) => ({
  type: "SELECTED_SONG_LIST",
  selectedSongList,
});

export const setSelectedSongIndex = (selectedSongIndex) => ({
  type: "SELECTED_SONG_INDEX",
  selectedSongIndex,
});

export const setErrors = (errors) => ({
  type: "SET_ERRORS",
  errors,
});

export const resetState = () => ({
  type: "RESET_STATE",
});
