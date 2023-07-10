import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseURL, LoginURL } from "../../../configs/ApiEndpoints";
import { DefaultHeaders } from "../../../configs/Constants";
import { DashboardRoute } from "../../../configs/Routes";

const LoginFormController = async (formData) => {
  try {
    const response = await axios.post(`${BaseURL}${LoginURL}`, formData, {
      headers: DefaultHeaders,
    });

    if (response.status === 200) {
      // Show toast for successful sign-up
      toast.success("Login successful!", { autoClose: 1000 });
      // save token in local storage
      localStorage.setItem("token", response.data.data.token);
      // redirect to home page
      window.location.href = DashboardRoute;
    } else {
      // Show toast for other status codes
      toast.error("An error occurred while processing your request.", {
        autoClose: 1000,
      });
    }
  } catch (error) {
    // Handle errors
    if (error.response) {
      // The request was made, but the server responded with an error status code
      toast.error(error.response.data["message"], { autoClose: 1000 });
    } else if (error.request) {
      // The request was made, but no response was received
      toast.error("No response received from the server.", { autoClose: 1000 });
    } else {
      // Something else happened in making the request that triggered an error
      toast.error(
        "Error occurred while sending the request: " + error.message,
        { autoClose: 1000 }
      );
    }
  }
};

export default LoginFormController;
