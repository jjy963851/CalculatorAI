import axios from "axios";

export const sendPromptToChatGpt = async (componentName) => {
  const url = "http://localhost:8080/api/v1/chatGpt/prompt";
  const data = {
    userPrompt: componentName,
  };

  try {
    const response = await axios.post(url, data);
    const content = response.data.choices[0].message.content;
    return content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
