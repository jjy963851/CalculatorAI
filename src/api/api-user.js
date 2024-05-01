import axios from "axios";
import { getAccessToken } from "./api-token";

export const fetchUserInfo = async () => {
  const url = "http://localhost:8080/api/user";

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
