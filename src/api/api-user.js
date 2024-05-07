import axios from "axios";
import { getAccessToken } from "./api-token";



export const fetchUserInfo = async () => {
   
  const url = import.meta.env.VITE_BACKEND_URL + "/api/user";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
      withCredentials: true
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
