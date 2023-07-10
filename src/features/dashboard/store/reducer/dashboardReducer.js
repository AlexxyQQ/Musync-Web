const initialState = {
  loggedUser: {},
  errors: {},
  allFolderWithSongs: {},
  selectedFolder: "",
  selectedSongList: [],
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
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
