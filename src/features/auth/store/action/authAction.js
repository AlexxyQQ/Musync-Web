export const setField = (field, value) => ({
  type: "SET_FIELD",
  field,
  value,
});

export const setErrors = (errors) => ({
  type: "SET_ERRORS",
  errors,
});

export const resetFields = () => ({
  type: "RESET_FIELDS",
});
