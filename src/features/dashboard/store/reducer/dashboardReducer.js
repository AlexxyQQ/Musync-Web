const initialState = {
  loggedUser: {},
  errors: {},
  allFolderWithSongs: {},
  selectedFolder: "",
  selectedSongList: [],
  selectedSongIndex: null,
  folderSongListTabVisible: false,
  queueTabVisible: false,
  homePageTabVisible: true,
  foldersWithCover: [],
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
    case "SELECTED_FOLDER":
      return {
        ...state,
        selectedFolder: action.selectedFolder,
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
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
