import axios from "axios";
import { getAccessToken } from "./api-token";

export const sendPromptToChatGpt = async (componentName) => {
  const url = import.meta.env.VITE_BACKEND_URL + `/api/v1/chatGpt/prompt`;
  const data = {
    userPrompt: componentName,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    const content = response.data.choices[0].message.content;
    console.log(content);
    return content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
