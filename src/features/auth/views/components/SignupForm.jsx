import React from "react";
import { ToastContainer } from "react-toastify";
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

const SignupForm = ({
  username,
  email,
  password,
  confirmPassword,
  errors,
  showPassword,
  handleChange,
  handleSubmit,
  handleTogglePasswordVisibility,
  handleToggleLoginFormVisibility,
}) => {
  return (
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
        SIGN UP
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username || ""}
          onChange={(e) => handleChange("username", e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
        />
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
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? "password" : "text"}
          id="confirmPassword"
          autoComplete="current-password"
          value={confirmPassword || ""}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
        <Button
          disableRipple
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          SIGNUP
        </Button>
        <Grid container>
          <Grid item>
            <Typography onClick={handleToggleLoginFormVisibility}>
              {"Already have an account? Log In"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  // return (
  //   <div>
  //     <form onSubmit={handleSignUpSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Username"
  //         id="username"
  //         value={username}
  //         onChange={(e) => handleChange("username", e.target.value)}
  //       />
  //       {errors.username && <p>{errors.username}</p>}

  //       <input
  //         type="text"
  //         placeholder="Email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => handleChange("email", e.target.value)}
  //       />
  //       {errors.email && <p>{errors.email}</p>}

  //       <input
  //         type="password"
  //         placeholder="Password"
  //         id="password"
  //         value={password}
  //         onChange={(e) => handleChange("password", e.target.value)}
  //       />
  //       {errors.password && <p>{errors.password}</p>}

  //       <input
  //         type="password"
  //         placeholder="Confirm Password"
  //         id="confirmPassword"
  //         value={confirmPassword}
  //         onChange={(e) => handleChange("confirmPassword", e.target.value)}
  //       />
  //       {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

  //       <button type="submit">Signup</button>
  //     </form>
  //     <ToastContainer />
  //   </div>
  // );
};

export default SignupForm;
