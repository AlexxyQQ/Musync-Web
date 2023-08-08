export const setUser = (loggedUser) => ({
  type: "SET_USER",
  loggedUser,
});

export const setAllUserSongs = (allUserSongs) => ({
  type: "ALL_USER_SONGS",
  allUserSongs,
});
export const setAllPublicSongs = (allPublicSongs) => ({
  type: "ALL_PUBLIC_SONGS",
  allPublicSongs,
});
export const setAllFolderWithSongs = (allFolderWithSongs) => ({
  type: "ALL_FOLDER_WITH_SONGS",
  allFolderWithSongs,
});

export const setSelectedFolder = (selectedFolder) => ({
  type: "SELECTED_FOLDER",
  selectedFolder,
});

export const setAllArtistWithSongs = (allArtistWithSongs) => ({
  type: "ALL_ARTIST_WITH_SONGS",
  allArtistWithSongs,
});

export const setSelectedArtist = (selectedArtist) => ({
  type: "SELECTED_ARTIST",
  selectedArtist,
});

export const setAllAlbumWithSongs = (allAlbumWithSongs) => ({
  type: "ALL_ALBUM_WITH_SONGS",
  allAlbumWithSongs,
});

export const setSelectedAlbum = (selectedAlbum) => ({
  type: "SELECTED_ALBUM",
  selectedAlbum,
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

export const setBrowsePageTabVisible = (browsePageTabVisible) => ({
  type: "BROWSE_PAGE_TAB_VISIBLE",
  browsePageTabVisible,
});

export const setArtistPageTabVisible = (artistPageTabVisible) => ({
  type: "ARTIST_PAGE_TAB_VISIBLE",
  artistPageTabVisible,
});

export const setAlbumPageTabVisible = (albumPageTabVisible) => ({
  type: "ALBUM_PAGE_TAB_VISIBLE",
  albumPageTabVisible,
});

export const setSearchPageTabVisible = (searchPageTabVisible) => ({
  type: "SEARCH_PAGE_TAB_VISIBLE",
  searchPageTabVisible,
});

export const setFoldersWithCover = (foldersWithCover) => ({
  type: "FOLDERS_WITH_COVER",
  foldersWithCover,
});
