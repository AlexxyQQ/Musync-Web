import React from "react";
import { TextField, Button } from "@mui/material";

const LoginView = () => {
  return (
    <div>
      <form>
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
    </div>
  );
};

export default LoginView;
