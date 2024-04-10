/** Made From 장재용
 * 2024-04-10
 * 헤더입니다. 메뉴부분에 깃허브등 링크를 넣을수있으며
 * 모든페이지에 공통적으로 들어가게 됩니다.
 *
 */

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-[1rem] px-[2rem] ">
        {/* 메인로고가 들어갈자리. 클릭하면 홈페이지로 이동 */}
        <h1 href="/" className="text-2xl font-['Roboto'] font-[500]">
          {" "}
          Calculator <span className="font-[800] text-purple-600">AI</span>
        </h1>
        {/* 링크들이 들어갈자리. 커스텀으로 깃허브등 다른 주소를 넣으시면됩니다. */}
        <div className=" space-x-[2rem]">
          <button className="font-[500] font-['Roboto'] hover:text-blue-600 hover:underline duration-150 text-lg ">
            Github
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

      <div className="border-2 py-[1rem] bg-slate-100 shadow-md px-[1rem] ">
        {/* 여기는 페이지의 경로, 또는 어떤 스택을 사용했는지를 보여주는 곳으로 사용 */}

        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          React
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Java
        </span>
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          DataBase
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Spring
        </span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Yellow
        </span>
        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          Indigo
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
          Purple
        </span>
        <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          Pink
        </span>
      </div>
    </div>
  );
}
