// Function to validate signup form data
const SignupFormValidator = (formData) => {
  const errors = {};

  // Validate username field
  if (formData.username.trim() === "") {
    errors.username = "Username is required";
  }

  // Validate email field
  if (formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  // Validate password field
  if (formData.password.trim() === "") {
    errors.password = "Password is required";
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  // Validate confirmPassword field
  if (formData.confirmPassword.trim() === "") {
    errors.confirmPassword = "Confirm Password is required";
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

// Function to check if the email has a valid format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { SignupFormValidator };
