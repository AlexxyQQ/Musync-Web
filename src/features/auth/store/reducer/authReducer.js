const initialState = {
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
  errors: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET_FIELDS":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
