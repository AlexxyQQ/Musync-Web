const initialState = {
  loggedUser: {},
  errors: {},
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        loggedUser: action.loggedUser,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET_USER":
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
