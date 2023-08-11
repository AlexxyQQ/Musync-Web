import axios from "axios";
import { toast } from "react-toastify";
import {
  BaseURL,
  GetAllAlbumWithSongsURL,
  deleteSongURL,
} from "../../../configs/ApiEndpoints";

const deleteSong = async (songId) => {
  try {
    const response = await axios.post(
      `${BaseURL}${deleteSongURL}`,
      {
        songId: songId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          apisecret: "Apple",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data.newSong;
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

export default deleteSong;
