import axios from "axios";
import { toast } from "react-toastify";
import {
  BaseURL,
  GetAllArtistWithSongsURL,
} from "../../../configs/ApiEndpoints";

const getAllArtistWithSongs = async () => {
  try {
    const response = await axios.get(`${BaseURL}${GetAllArtistWithSongsURL}`, {
      headers: {
        "Content-Type": "application/json",
        apisecret: "Apple",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data;
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
};

export default getAllArtistWithSongs;
