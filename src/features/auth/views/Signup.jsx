import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupFormValidator } from "../../../utils/formValidators/SignupFormValidator";
import SignupFormController from "../services/signupController";
import { resetFields, setErrors, setField } from "../store/action/authAction";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupView = () => {
  const { username, password, email, confirmPassword, errors } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, password, confirmPassword };
    const validationErrors = SignupFormValidator(formData, navigate);

    if (Object.keys(validationErrors).length === 0) {
      SignupFormController(formData);
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
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        {errors.username && <p>{errors.username}</p>}

        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Signup</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupView;
