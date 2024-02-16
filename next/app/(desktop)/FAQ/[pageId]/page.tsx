import Footer from "../../_components/footer";
import Header from "../../_components/header";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const FAQ = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-slate-50 dark:bg-neutral-900">
        <div className="w-[1001px] h-[568px] flex-col justify-center items-start gap-[50px] inline-flex">
          <div className="flex-col justify-start items-center gap-[70px] flex">
            <div className="text-black text-[32px] font-bold font-nav tracking-[3.20px]">
              FAQ
            </div>
            <div className="pb-[50px] border border-gray-200 flex-col justify-center items-center flex">
              <div className="flex-col justify-center items-center flex">
                <div className="justify-start items-start inline-flex">
                  <div className="w-40 h-[46px] bg-zinc-100 dark:bg-zinc-800 border-r border-b border-gray-200 dark:border-neutral-50 justify-start items-center flex">
                    <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                        제목
                      </div>
                    </div>
                  </div>
                  <div className="w-[841px] h-[46px] border-b border-gray-200 dark:border-neutral-50 justify-start items-center flex">
                    <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body">
                        Q. 반품 후 환불요청을 했는데 주문금액이랑 다르게 환불 된
                        것 같아요.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 justify-start items-start inline-flex">
                  <div className="w-40 h-[46px] bg-zinc-100 dark:bg-zinc-800 border-r border-gray-200 justify-start items-center flex">
                    <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                        작성자
                      </div>
                    </div>
                  </div>
                  <div className="w-[841px] h-[46px] justify-start items-center flex">
                    <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body">
                        SUMROV
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="w-[940px] h-[46px] pr-[795px] pt-[15px] pb-4 border-b border-gray-200 dark:neutral-50 justify-start items-center inline-flex">
                  <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      2022-04-05 21:36:16
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-[50px] flex">
                  <div className="w-[890px] text-black text-sm font-light font-pre uppercase">
                    Q. 반품 후 환불요청을 했는데 주문금액이랑 다르게 환불 된 것
                    같아요.
                    <br />
                    <br />
                    A. 고객변심(사이즈미스, 상품불만족 등)으로 인한 반품 시,
                    &apos;초기배송비(3,000원) + 수거배송비(3,000원)을&apos;
                    주문금액에서 차감 후 환불이 진행됩니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[30px] pt-1.5 pb-[7px] border border-gray-200 dark:neutral-50 justify-center items-center inline-flex">
            <div className="text-black dark:text-neutral-50 text-sm font-light font-pre uppercase tracking-wide">
              목록
            </div>
          </div>
          <div className="flex border border-gray-200 dark:neutral-50 h-10">
            <div className="w-[150px] h-10 pt-[11px] pb-3 border-r border-gray-200 justify-center items-center inline-flex">
              <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                다음글
              </div>
            </div>
            <div className="w-[841px] h-10 justify-start items-center inline-flex">
              <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                  Q. 반품 후 환불요청을 했는데 주문금액이랑 다르게 환불 된 것
                  같아요.
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

export default FAQ;
