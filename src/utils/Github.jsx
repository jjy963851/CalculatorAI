import { useState } from "react";

export default function Github() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        className="text-green-600 bg-gray-900 hover:bg-slate-700 focus:ring-4 focus:outline-none  font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={toggleDropdown}
      >
        Github{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute top-full mt-1"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="https://github.com/jjy963851"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                JaeYong
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kwonbokeun"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Kwon Bo Keun
              </a>
            </li>
            <li>
              <a
                href="https://github.com/algoalgo007"
                className="block px-4 py-2 hover:bg-gray-100  "
              >
                Yoon Ki Bum
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
