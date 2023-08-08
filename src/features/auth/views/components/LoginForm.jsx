import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";

// Separate the LoginForm component
const LoginForm = ({
  email,
  password,
  errors,
  handleChange,
  handleSubmit,
  showPassword,
  handleTogglePasswordVisibility,
  handleToggleLoginFormVisibility,
}) => (
  <Box
    sx={{
      flex: "4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      m: 3,
      p: 2,
      borderRadius: "20px",
      backgroundColor: "white",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      width: "100%",
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Log In
    </Typography>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email || ""}
        onChange={(e) => handleChange("email", e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? "password" : "text"}
        id="password"
        autoComplete="current-password"
        value={password || ""}
        onChange={(e) => handleChange("password", e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        disableRipple
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        LOGIN
      </Button>
      <Grid container>
        <Grid item>
          <Typography onClick={handleToggleLoginFormVisibility}>
            {"Don't have an account? Sign Up"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default LoginForm;
