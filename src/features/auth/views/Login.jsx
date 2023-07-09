import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetFields, setErrors, setField } from "../store/action/authAction";
import { LoginFormValidator } from "../../../utils/formValidators/LoginFormValidator";
import LoginFormController from "../services/loginController";
import { ToastContainer } from "react-toastify";

const LoginView = () => {
  const { password, email, errors } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    const validationErrors = LoginFormValidator(formData);

    if (Object.keys(validationErrors).length === 0) {
      LoginFormController(formData);
      dispatch(resetFields());
    } else {
      dispatch(setErrors(validationErrors));
    }
  };

  const handleChange = (field, value) => {
    dispatch(setField(field, value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Email"
          id="email"
          variant="outlined"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          type="password"
          label="Password"
          id="password"
          variant="outlined"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginView;
