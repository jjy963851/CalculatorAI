/** Made From 장재용
 * 2024-04-10
 * 헤더입니다. 메뉴부분에 깃허브등 링크를 넣을수있으며
 * 모든페이지에 공통적으로 들어가게 됩니다.
 *
 */

import Github from "./Github";
import LoginDrawer from "./LoginDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const session = null;
  return (
    <div className="flex flex-col HeaderColor ">
      <div className="flex justify-between my-[1rem] px-[2rem] ">
        {/* 메인로고가 들어갈자리. 클릭하면 홈페이지로 이동 */}
        <h1 className="text-2xl font-['Roboto'] font-[500]">
          {" "}
          <a
            href="/"
            className="cursor-pointer hover:text-[20px] duration-150 ease-in text-[#9d4edd]"
          >
            Calculator <span className="font-[800] text-purple-600 ">AI</span>
          </a>
        </h1>
        {/* 링크들이 들어갈자리. 커스텀으로 깃허브등 다른 주소를 넣으시면됩니다. */}
        <div className=" space-x-[2rem] flex  ">
          <button>
            <Github />
          </button>
          <button className="font-[500] font-['Roboto'] text-[#edf2f4] hover:text-purple-600 hover:underline duration-150 text-lg ">
            Blog
          </button>

          <button className="font-[500] font-['Roboto'] text-[#edf2f4] hover:text-purple-600 hover:underline duration-150 text-lg ">
            Menu
          </button>
          <span className=" font-[500] font-['Roboto'] text-[#edf2f4] text-lg  pr-[5rem]">
            {/*구글에서 제공하는 세션이나 토큰값이 있다면 이름 및 로그아웃 제공*/}
            {session?.user ? (
              <div className="flex ">
                <AccountCircleIcon className="scale-150 text-gray-500" />
                <p className="text-sm font-semibold font-['Roboto']">
                  {session.user.name}
                </p>

                <button
                  onClick={async () => {
                    {
                      /**로그아웃 함수 넣기 */
                    }
                    alert(`Good Bye! ${session.user?.name}`, {
                      //position: 'top-right',
                    });
                  }}
                >
                  <p className="text-lg  font-['Roboto'] hover:font-semibold duration-150 ">
                    Log out
                  </p>
                </button>
              </div>
            ) : (
              <div className=" mt-[3px]">
                <button>
                  <LoginDrawer />
                </button>
              </div>
            )}
          </span>

          {session?.user ? (
            <div></div>
          ) : (
            <div className="flex relative space-x-3 mt-[0.5rem] ">
              <p className="text-md text-[#edf2f4]">Guest</p>
              <AccountCircleIcon className="scale-150 text-gray-500" />
            </div>
          )}
        </div>
      </div>

      {/* <!-- Breadcrumb --> */}
      <nav
        className="flex px-5 py-3 text-gray-700 border border-[#121212] rounded-sm bg-[#0c1821] "
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
                className="ms-1 text-sm font-medium  hover:text-blue-600 md:ms-2 text-[#edf2f4]"
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
                <span className="ms-1 text-sm font-medium  md:ms-2 text-[#edf2f4] ">
                  React + Tailwind CSS AI Component Generator
                </span>
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className=" py-[1rem]  shadow-md xs:text-md sm:text-lg md:text-xl text-[#edf2f4]">
        {/* 여기는 페이지의 경로, 또는 어떤 스택을 사용했는지를 보여주는 곳으로 사용 */}
        <h2 className="flex justify-center">
          <span className="text-[#edf2f4] font-[500]">Create and preview </span>
          <span className="flex pl-1 ">
            <img src="./react-2.svg" width={25} height={25} alt="react" />
            <span className=" font-semibold text-[#edf2f4]">React</span>
          </span>{" "}
          +{" "}
          <span className="flex px-2 font-semibold text-[#edf2f4]">
            <img
              src="./tailwind-css-2.svg"
              width={25}
              height={25}
              alt="tailwind"
            />
            Tailwind CSS
          </span>{" "}
          <span>
            <span className="font-['Roboto'] text-[#edf2f4]">Calculator</span>
            <span className="font-[800] text-purple-600 pr-2 font-['Roboto']">
              AI
            </span>{" "}
            <span className="text-[#edf2f4] font-[500]">using AI</span>
          </span>
        </h2>
      </div>
    </div>
  );
}
