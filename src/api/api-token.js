import axios from "axios";

// 쿠키에서 액세스 토큰 가져오기
export function getAccessToken() {
  const cookies = document.cookie.split(";"); // 모든 쿠키 가져오기
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("access_token=")) {
      return cookie.substring("access_token=".length, cookie.length);
    }
  }
  return null; // 액세스 토큰을 찾지 못한 경우
}

export const sendPromptToChatGpt = async (componentName) => {
  const url = "http://localhost:8080/api/v1/chatGpt/prompt";
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
    return content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
