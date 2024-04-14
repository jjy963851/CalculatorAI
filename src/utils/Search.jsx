import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Code`);
  };

  return (
    <div>
      <form className="max-w-2xl mx-auto border-2 p-[1rem] rounded-full">
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
            type="search"
            id="default-search"
            name="searchQuery"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-purple-500 focus:border-black "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-purple-200 font-[600] rounded-full text-xs px-4 py-2 "
          >
            MAKE MAGIC
          </button>
        </div>
      </form>
    </div>
  );
}
