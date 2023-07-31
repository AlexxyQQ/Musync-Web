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

export const setFolderSongListTabVisible = (folderSongListTabVisible) => ({
  type: "FOLDER_SONG_LIST_TAB_VISIBLE",
  folderSongListTabVisible,
});

export const setQueueTabVisible = (queueTabVisible) => ({
  type: "QUEUE_TAB_VISIBLE",
  queueTabVisible,
});

export const setHomePageTabVisible = (homePageTabVisible) => ({
  type: "HOME_PAGE_TAB_VISIBLE",
  homePageTabVisible,
});

export const setFoldersWithCover = (foldersWithCover) => ({
  type: "FOLDERS_WITH_COVER",
  foldersWithCover,
});
