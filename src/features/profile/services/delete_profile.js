import axios from "axios";
import { toast } from "react-toastify";
import { BaseURL, deleteUserURL } from "../../../configs/ApiEndpoints";

async function deleteProfile() {
  try {
    const response = await axios.post(
      `${BaseURL}${deleteUserURL}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          apisecret: "Apple",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    localStorage.removeItem("token");
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
  }
}

export default deleteProfile;
