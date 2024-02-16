import { Select, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Lock,
  Minus,
  Plus,
} from "lucide-react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const yes = true;

const ShopPageDetail = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-neutral-50 dark:bg-neutral-900 pt-[150px] px-[157.5px] pb-[306.67px]">
        <div className="w-[1125px] flex-col items-center gap-[200px] inline-flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="justify-center items-center gap-[25px] inline-flex">
              <img
                className="w-[550px] h-[733.33px]"
                src="https://via.placeholder.com/550x733"
              />
              <div className="w-[550px] h-[733px] flex-col justify-center items-center gap-[50px] inline-flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="justify-start items-start gap-[5px] inline-flex">
                      <div className="w-3.5 h-3.5 bg-black dark:bg-white" />
                      <div className="w-3.5 h-3.5 bg-rose-500" />
                      <div className="w-3.5 h-3.5 bg-green-600" />
                    </div>
                    <div className="text-black dark:text-neutral-50 text-xl font-medium font-pre">
                      Lorem ipsum dolor sit (BLACK, RED, GREEN)
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[50px] flex">
                    <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                      KRW 10,000
                    </div>
                    <div className="flex-col justify-start items-start gap-[30px] flex">
                      <div className="w-[421px] text-neutral-600 dark:text-zinc-100 text-xs font-light font-pre">
                        -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬
                        로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem
                        ipsum dolor sit amet, consectetuer
                        <br />
                        <br />
                        -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬
                        로램잇섬 로램
                        <br />
                        로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet, consectetuer <br />
                        <br />
                        -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬
                        로램잇섬 로램
                        <br />
                        로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum dolor
                        sit amet, consectetuer
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cn(
                    "flex-col justify-center items-center gap-[75px] flex",
                    yes && "gap-[30px]"
                  )}
                >
                  <div className="flex-col justify-center items-end gap-[15px] flex">
                    <div className="w-[318px] justify-between items-center inline-flex">
                      <div className="text-neutral-400 dark:text-zinc-100 text-[11px] font-normal font-pre">
                        색상
                      </div>
                      <Select>
                        <SelectTrigger className="dark:bg-neutral-900 dark:text-stone-300 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                          -[필수] 옵션을 선택해 주세요-
                        </SelectTrigger>
                      </Select>
                    </div>
                    <div className="justify-center items-center gap-[50px] inline-flex">
                      <div className="text-neutral-400 dark:text-zinc-100 text-[11px] font-normal font-pre">
                        사이즈
                      </div>
                      <Select>
                        <SelectTrigger className="dark:bg-neutral-900 dark:text-stone-300 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                          -[필수] 옵션을 선택해 주세요-
                        </SelectTrigger>
                      </Select>
                    </div>
                  </div>
                  {yes && (
                    <>
                      <div className="w-[299px] flex mt-3 flex-col">
                        <div className="flex flex-col">
                          <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                            Lorem ipsum dolor sit
                          </div>
                          <div className="text-neutral-600 dark:text-neutral-50 text-[10px] font-normal font-pre">
                            -블랙/S
                          </div>
                        </div>
                        <div className="text-black dark:text-white text-[11px] font-semibold font-pre flex justify-end w-full">
                          KRW 10,000
                        </div>
                        <div className="flex gap-1">
                          <input
                            placeholder="1"
                            className="text-[10px] font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-neutral-900"
                          />

                          <div className="w-[18px] h-[18px]">
                            <Plus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                          </div>
                          <div className="w-[18px] h-[18px]">
                            <Minus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[299px] h-3.5 justify-center items-start gap-[167px] inline-flex">
                        <div className="dark:text-white text-[11px] font-semibold font-pre">
                          총상품금액
                        </div>
                        <div className="w-[84px] flex justify-center items-center">
                          <div className="text-blue-500 text-[11px] font-semibold font-pre">
                            KRW 10,000
                          </div>
                          <div className="text-blue-500 text-[10px] font-normal font-pre">
                            (1개)
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[315px] h-[41px] py-3.5 bg-neutral-900 dark:bg-zinc-600 justify-center items-center inline-flex">
                      <div className="text-neutral-50 text-[11px] font-medium font-body">
                        Buy it Now
                      </div>
                    </div>
                    <div className="w-[315px] h-[41px] py-3.5 border border-neutral-900 dark:border-zinc-600 justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-[11px] font-medium font-body">
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-10 flex">
              <img
                className="w-[550px] h-[733.33px]"
                src="https://via.placeholder.com/550x733"
              />
              <img
                className="w-[550px] h-[733.33px]"
                src="https://via.placeholder.com/550x733"
              />
              <img
                className="w-[550px] h-[733.33px]"
                src="https://via.placeholder.com/550x733"
              />
            </div>
          </div>
          <div className="h-[375px] flex-col justify-center items-center flex">
            <div className="justify-center items-center gap-0.5 inline-flex">
              <div className="px-[15px] py-[5px] bg-neutral-900 dark:bg-zinc-600 justify-center items-center gap-2.5 flex">
                <div className="text-neutral-50 text-[10px] font-normal font-pre tracking-wide">
                  결제 안내
                </div>
              </div>
              <div className="px-[15px] py-[5px] bg-gray-200 dark:bg-zinc-800 justify-center items-center gap-2.5 flex">
                <div className="text-black dark:text-neutral-50 text-[10px] font-normal font-pre tracking-wide">
                  배송 안내
                </div>
              </div>
              <div className="px-[15px] py-[5px] bg-gray-200 dark:bg-zinc-800 justify-center items-center gap-2.5 flex">
                <div className="text-black dark:text-neutral-50 text-[10px] font-normal font-pre tracking-wide">
                  교환/환불 안내
                </div>
              </div>
            </div>
            <div className="px-[125px] py-[50px] border border-gray-20 dark:border-zinc-600 flex-col justify-center items-center flex">
              <div className="w-[700px]">
                <span className="text-black dark:text-neutral-50 text-[11px] font-normal font-pre uppercase tracking-wide">
                  결제 안내
                </span>
                <span className="text-black dark:text-neutral-50 text-[10px] font-light font-pre uppercase tracking-wide">
                  <br />
                  <br />
                </span>
                <pre className="text-neutral-900 dark:text-neutral-50 leading-[11.93px] text-[10px] font-light font-pre uppercase tracking-wide whitespace-pre-wrap">
                  행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이
                  임명한다.
                  <br />
                  형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.
                  <br />
                  탄핵결정은 공직으로부터 파면함에 그친다. <br />
                  그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는
                  아니한다.
                  <br /> 모든 국민은 학문과 예술의 자유를 가진다. <br />
                  정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지
                  국회에 제출하고,
                  <br /> 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다.
                  <br />
                  헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여
                  국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을 얻어야
                  한다.
                  <br /> 근로자는 근로조건의 향상을 위하여 자주적인
                  단결권·단체교섭권 및 단체행동권을 가진다.
                  <br />
                  <br />
                  <br />
                  누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을
                  받을 권리를 가진다. <br />
                  다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이
                  정하는 바에 의하여 국가가 변호인을 붙인다.
                  <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의 복지와
                  권익의 향상을 위하여 노력하여야 한다. <br />
                  평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                  민주평화통일자문회의를 둘 수 있다. <br />
                  대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                  재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타
                  법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을
                  위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
                  <br />
                </pre>
              </div>
            </div>
          </div>
          <div className="w-[850px] flex-col justify-start items-center flex">
            <div className="text-black text-xs dark:text-neutral-50 font-bold font-nav uppercase tracking-wide">
              review
            </div>
            <div className="flex-col justify-start items-end gap-[15px] flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="px-5 py-[5px] bg-neutral-900 dark:bg-zinc-600 justify-start items-start gap-2.5 flex">
                  <div className="text-neutral-50 text-[10px] font-medium font-body">
                    Write
                  </div>
                </div>
                <div className="px-5 py-[5px] border border-neutral-900 dark:border-zinc-600 justify-start items-start gap-2.5 flex">
                  <div className="text-black dark:text-neutral-50 text-[10px] font-medium font-body">
                    List
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-10 flex">
                <div className="flex-col justify-center items-center flex">
                  <div className="w-full border-t border-b border-neutral-400 justify-center items-center flex">
                    <div className="w-[70px] h-[30px] justify-center items-center flex">
                      <div className="text-zinc-600 dark:text-stone-300 text-xs font-light font-body uppercase">
                        NO
                      </div>
                    </div>
                    <div className="w-[700px] h-[30px] justify-center items-center flex">
                      <div className="text-zinc-600 dark:text-stone-300 text-xs font-light font-body uppercase">
                        subject
                      </div>
                    </div>
                    <div className="w-[70px] justify-center items-center flex">
                      <div className="text-zinc-600 dark:text-stone-300 text-xs font-light font-body uppercase">
                        writer
                      </div>
                    </div>
                    <div className="w-[200px] h-[30px] justify-center items-center flex">
                      <div className="text-zinc-600 dark:text-stone-300 text-xs font-light font-body uppercase">
                        date
                      </div>
                    </div>
                  </div>
                  {data.map((arg, i) => (
                    <div
                      key={i}
                      className="h-10 w-full border-b border-gray-200 justify-center items-center inline-flex"
                    >
                      <div className="w-[70px] h-[30px] justify-center items-center flex">
                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                          12
                        </div>
                      </div>
                      <div className="w-[700px] h-[30px] justify-start items-center flex">
                        <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                          좋아요
                        </div>
                      </div>
                      <div className="w-[70px] justify-center items-center flex">
                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                          MAYU
                        </div>
                      </div>
                      <div className="w-[200px] justify-center items-center flex">
                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                          2022-04-05 21:36:16
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <ChevronsLeft />
                  <ChevronLeft />
                  <div className="text-black dark:text-neutral-50 text-lg font-medium font-body">
                    1/10
                  </div>
                  <ChevronRight />
                  <ChevronsRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center flex">
            <div className="text-black text-xs dark:text-neutral-50 font-bold font-nav uppercase tracking-wide">
              q&a
            </div>
            <div className="flex-col justify-start items-end gap-[15px] flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="px-5 py-[5px] bg-neutral-900 dark:bg-zinc-600 justify-start items-start gap-2.5 flex">
                  <div className="text-neutral-50 text-[10px] font-medium font-body">
                    Write
                  </div>
                </div>
                <div className="px-5 py-[5px] border border-neutral-900 dark:border-zinc-600 justify-start items-start gap-2.5 flex">
                  <div className="text-black dark:text-neutral-50 text-[10px] font-medium font-body">
                    List
                  </div>
                </div>
              </div>
              <div className="w-[800px] h-[30px] border-t border-neutral-400 justify-center items-center inline-flex">
                <div className="text-neutral-600 dark:text-stone-300 text-xs font-light font-pre uppercase tracking-wide">
                  게시물이 없습니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPageDetail;
