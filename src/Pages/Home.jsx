/**Made From 장재용
 * 2024-04-10
 * Final Edited 장재용
 *
 * 메인화면. 코드들과 AI가 생성하는 화면을 보여줄곳.
 * 여기서 대부분의 작업들이 일어납니다.
 */

import Search from "../utils/Search";
import Carousel from "../utils/Craousel/Craousel";
import { countries } from "../utils/Craousel/CraouselData";
export default function Home() {
  return (
    <main className="Home">
      <div className="pt-[5rem]">
        <Search />
        <div className="flex justify-center mt-[5rem] ">
          <Carousel images={countries} />
        </div>
      </div>
    </main>
  );
}
