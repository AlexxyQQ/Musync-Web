import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import { resetFields, setErrors, setField } from "../store/action/authAction";
import { LoginFormValidator } from "../../../utils/formValidators/LoginFormValidator";
import LoginFormController from "../services/loginController";
import LoginForm from "./components/LoginForm";
import CarouselSlide from "./components/OnboardingCarousel";
import { ToastContainer } from "react-toastify";
import SignupFormController from "../services/signupController";
import { SignupFormValidator } from "../../../utils/formValidators/SignupFormValidator";
import SignupForm from "./components/SignupForm";

// Separate the LoginView component
const LoginView = () => {
  const { username, password, email, confirmPassword, errors } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowloginForm] = useState(true);

  const handleTogglePasswordVisibility = () => {
    console.log("asss");
    setShowPassword(!showPassword);
  };
  const handleToggleLoginFormVisibility = () => {
    setShowloginForm(!showLoginForm);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    const validationErrors = LoginFormValidator(formData);

    const fieldsReset = () => {
      dispatch(resetFields());
    };

    if (Object.keys(validationErrors).length === 0) {
      LoginFormController(formData, navigate, fieldsReset);
    } else {
      dispatch(setErrors(validationErrors));
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, password, confirmPassword };
    const validationErrors = SignupFormValidator(formData, navigate);

    const fieldsReset = () => {
      dispatch(resetFields());
    };

    if (Object.keys(validationErrors).length === 0) {
      SignupFormController(formData, navigate, fieldsReset);
    } else {
      dispatch(setErrors(validationErrors));
    }
  };

  const handleChange = (field, value) => {
    dispatch(setField(field, value));
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#383838",
          height: "100vh",
        }}
      >
        <CarouselSlide />
        {showLoginForm ? (
          <LoginForm
            email={email}
            password={password}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleLoginSubmit}
            showPassword={showPassword}
            handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            handleToggleLoginFormVisibility={handleToggleLoginFormVisibility}
          />
        ) : (
          <SignupForm
            email={email}
            password={password}
            username={username}
            confirmPassword={confirmPassword}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSignUpSubmit}
            showPassword={showPassword}
            handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            handleToggleLoginFormVisibility={handleToggleLoginFormVisibility}
          />
        )}
      </Box>
    </>
  );
};

export default LoginView;
