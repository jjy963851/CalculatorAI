import { useNavigate } from "react-router-dom";
import { sendPromptToChatGpt } from "../api/api-prompt";
import { useState } from "react";

export default function Search() {
  const navigate = useNavigate();
  const [componentName, setComponentName] = useState("");

  const handleChange = (event) => {
    setComponentName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let content = "";

    try {
      content = await sendPromptToChatGpt(componentName);
      // Code 컴포넌트로 이동 및 props 전달
      navigate(`/Code`, { state: { props: content } });
    } catch (ex) {
      // 만료시 로그인 리다이렉트
      if (ex.response && ex.response.status === 401) {
        // 401 redirect login page
        window.location.href =
          import.meta.env.VITE_BACKEND_URL + "/oauth2/authorization/google";
      } else {
        // unexpected 에러가 발생한 경우
        console.log("에러가 발생했습니다.");
      }
    }
  };

  return (
    <div>
      <form className="max-w-2xl mx-auto border-2 p-[1rem] rounded-full border-[#9d4edd] ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={handleChange}
            type="search"
            id="default-search"
            name="searchQuery"
            className="block w-full p-4 ps-10 text-sm text-[#edf2f4] border border-gray-300 rounded-full bg-[#121212] focus:ring-purple-500 focus:border-black "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-purple-200 font-[600] rounded-full text-xs px-4 py-2 "
          >
            MAKE <span className="text-[#9d4edd]">MAGIC</span>
          </button>
        </div>
      </form>
    </div>
  );
}
