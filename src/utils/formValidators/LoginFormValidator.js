// Function to validate login form data
const LoginFormValidator = (formData) => {
  const errors = {};

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

  return errors;
};

// Function to check if the email has a valid format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { LoginFormValidator };
