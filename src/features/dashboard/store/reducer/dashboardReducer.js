const initialState = {
  loggedUser: {},
  errors: {},
  allFolderWithSongs: {},
  allArtistWithSongs: {},
  allAlbumWithSongs: {},
  selectedArtist: "",
  selectedAlbum: "",
  selectedFolder: "",
  selectedSongList: [],
  selectedSongIndex: null,
  folderSongListTabVisible: false,
  queueTabVisible: false,
  homePageTabVisible: true,
  foldersWithCover: [],
  allUserSongs: [],
  allPublicSongs: [],
  browsePageTabVisible: false,
  artistPageTabVisible: false,
  albumPageTabVisible: false,
  searchPageTabVisible: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedUser: action.loggedUser,
      };
    case "ALL_FOLDER_WITH_SONGS":
      return {
        ...state,
        allFolderWithSongs: action.allFolderWithSongs,
      };
    case "ALL_USER_SONGS":
      return {
        ...state,
        allUserSongs: action.allUserSongs,
      };
    case "ALL_PUBLIC_SONGS":
      return {
        ...state,
        allPublicSongs: action.allPublicSongs,
      };
    case "SELECTED_FOLDER":
      return {
        ...state,
        selectedFolder: action.selectedFolder,
      };
    case "ALL_ARTIST_WITH_SONGS":
      return {
        ...state,
        allArtistWithSongs: action.allArtistWithSongs,
      };
    case "SELECTED_ARTIST":
      return {
        ...state,
        selectedArtist: action.selectedArtist,
      };
    case "ALL_ALBUM_WITH_SONGS":
      return {
        ...state,
        allAlbumWithSongs: action.allAlbumWithSongs,
      };
    case "SELECTED_ALBUM":
      return {
        ...state,
        selectedAlbum: action.selectedAlbum,
      };
    case "SELECTED_SONG_LIST":
      return {
        ...state,
        selectedSongList: action.selectedSongList,
      };
    case "SELECTED_SONG_INDEX":
      return {
        ...state,
        selectedSongIndex: action.selectedSongIndex,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "FOLDERS_WITH_COVER":
      return {
        ...state,
        foldersWithCover: action.foldersWithCover,
      };
    case "QUEUE_TAB_VISIBLE":
      return {
        ...state,
        queueTabVisible: action.queueTabVisible,
      };
    case "FOLDER_SONG_LIST_TAB_VISIBLE":
      return {
        ...state,
        folderSongListTabVisible: action.folderSongListTabVisible,
      };
    case "HOME_PAGE_TAB_VISIBLE":
      return {
        ...state,
        homePageTabVisible: action.homePageTabVisible,
      };
    case "BROWSE_PAGE_TAB_VISIBLE":
      return {
        ...state,
        browsePageTabVisible: action.browsePageTabVisible,
      };
    case "ALBUM_PAGE_TAB_VISIBLE":
      return {
        ...state,
        albumPageTabVisible: action.albumPageTabVisible,
      };
    case "ARTIST_PAGE_TAB_VISIBLE":
      return {
        ...state,
        artistPageTabVisible: action.artistPageTabVisible,
      };
    case "SEARCH_PAGE_TAB_VISIBLE":
      return {
        ...state,
        searchPageTabVisible: action.searchPageTabVisible,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
