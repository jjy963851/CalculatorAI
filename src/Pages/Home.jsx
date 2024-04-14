/**Made From 장재용
 * 2024-04-10
 * Final Edited 장재용
 *
 * 메인화면. 코드들과 AI가 생성하는 화면을 보여줄곳.
 * 여기서 대부분의 작업들이 일어납니다.
 */

import Search from "../utils/Search";

export default function Home() {
  return (
    <main className="Home ">
      <div className="mt-[5rem]">
        <Search />
      </div>
    </main>
  );
}
