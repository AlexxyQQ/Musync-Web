import axios from "axios";
import { toast } from "react-toastify";
import { BaseURL, InitialLoginURL } from "../../../configs/ApiEndpoints";
import { LoginRoute } from "../../../configs/Routes";

async function initialLogin(navigate, setUser, dispatch) {
  try {
    const response = await axios.get(`${BaseURL}${InitialLoginURL}`, {
      headers: {
        "Content-Type": "application/json",
        apisecret: "Apple",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data.data.user;
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error status code
      toast.error(error.response.data["message"]);
    } else if (error.request) {
      // The request was made, but no response was received
      toast.error("No response received from the server.");
    } else {
      // Something else happened in making the request that triggered an error
      toast.error("Error occurred while fetching data: " + error.message);
    }

    navigate(LoginRoute);
  }
}

export default initialLogin;
