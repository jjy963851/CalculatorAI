/** Made From 장재용
 * 2024-04-10
 * 헤더입니다. 메뉴부분에 깃허브등 링크를 넣을수있으며
 * 모든페이지에 공통적으로 들어가게 됩니다.
 *
 */

import Github from "./Github";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-[1rem] px-[2rem] ">
        {/* 메인로고가 들어갈자리. 클릭하면 홈페이지로 이동 */}
        <h1 className="text-2xl font-['Roboto'] font-[500]">
          {" "}
          <a href="/">
            Calculator <span className="font-[800] text-purple-600">AI</span>
          </a>
        </h1>
        {/* 링크들이 들어갈자리. 커스텀으로 깃허브등 다른 주소를 넣으시면됩니다. */}
        <div className=" space-x-[2rem]">
          <button>
            <Github />
          </button>
          <button className="font-[500] font-['Roboto'] hover:text-blue-600 hover:underline duration-150 text-lg ">
            blog
          </button>
          <button className="font-[500] font-['Roboto'] hover:text-blue-600 hover:underline duration-150 text-lg ">
            Login
          </button>
          <button className="font-[500] font-['Roboto'] hover:text-blue-600 hover:underline duration-150 text-lg ">
            Menu
          </button>
        </div>
      </div>

      {/* <!-- Breadcrumb --> */}
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-sm bg-gray-50 "
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className={`inline-flex items-center text-sm font-medium ${
                location.pathname === "/"
                  ? "text-purple-600"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Apps
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 "
              >
                AI tools
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <a
                href="/Code"
                className={`inline-flex items-center text-sm font-medium ${
                  location.pathname === "/Code"
                    ? "text-purple-600"
                    : "text-gray-400 hover:text-blue-600"
                }`}
              >
                <svg
                  className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium  md:ms-2 ">
                  React + Tailwind CSS AI Component Generator
                </span>
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="border-b-2 py-[1rem]  shadow-md xs:text-md sm:text-lg md:text-xl ">
        {/* 여기는 페이지의 경로, 또는 어떤 스택을 사용했는지를 보여주는 곳으로 사용 */}
        <h2 className="flex justify-center">
          <span className="text-gray-500 font-[500]">Create and preview </span>
          <span className="flex pl-1 ">
            <img src="./react-2.svg" width={25} height={25} alt="react" />
            <span className=" font-semibold">React</span>
          </span>{" "}
          +{" "}
          <span className="flex px-2 font-semibold">
            <img
              src="./tailwind-css-2.svg"
              width={25}
              height={25}
              alt="tailwind"
            />
            Tailwind CSS
          </span>{" "}
          <span>
            <span className="font-['Roboto']">Calculator</span>
            <span className="font-[800] text-purple-600 pr-2 font-['Roboto']">
              AI
            </span>{" "}
            <span className="text-gray-500 font-[500]">using AI</span>
          </span>
        </h2>
      </div>
    </div>
  );
}
