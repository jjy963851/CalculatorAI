import axios from "axios";
import { getAccessToken } from "./api-token";

axios.defaults.withCredentials = true;

export const fetchUserInfo = async () => {
  const url = import.meta.env.VITE_BACKEND_URL + "/api/user";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
