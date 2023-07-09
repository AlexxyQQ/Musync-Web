import React from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import LoginFormController from "../services/loginController";

const LoginView = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    LoginFormController(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField type="text" label="Email" id="email" variant="outlined" />

        <TextField
          type="password"
          label="Password"
          id="password"
          variant="outlined"
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
