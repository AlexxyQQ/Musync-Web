export const setUser = (loggedUser) => ({
  type: "SET_USER",
  loggedUser,
});

export const setErrors = (errors) => ({
  type: "SET_ERRORS",
  errors,
});

export const resetUser = () => ({
  type: "RESET_USER",
});
