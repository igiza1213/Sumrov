import Footer from "../_components/footer";
import Header from "../_components/header";
import { Lock } from "lucide-react";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px] relative h-[calc(100vh-105px)]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
          Q&A
        </div>
        <div className="w-[335px] flex items-center flex-col h-[161px] border border-1 border-gray-300">
          <div className="w-[333px] h-[51px] bg-gray-200 grid place-items-center border-b border-gray-300 mb-[6px]">
            <div className="text-black text-center text-[17px] font-medium font-nav">
              비밀글 보기
            </div>
          </div>
          <div className="w-[167px] h-[78px] flex-col justify-start items-center gap-1.5 inline-flex">
            <div className="w-[17px] h-[17px] relative">
              <Lock className="w-[17px] h-[17px]" />
            </div>
            <div className="text-center text-black text-[11px] font-light font-nav">
              이 글은 비밀글입니다
              <br />
              비밀번호를 입력해 주세요.
            </div>
            <div className="w-[167px] h-[23px] relative">
              <div className="w-[127px] h-[23px] left-0 top-0 absolute bg-neutral-50 border border-stone-300" />
              <div className="w-[34px] h-[23px] left-[133px] top-0 absolute">
                <div className="w-[34px] h-[23px] left-0 top-0 absolute bg-neutral-400" />
                <div className="w-[35px] h-2.5 top-[3.5px] absolute text-center text-neutral-50 text-[10px] ont-light font-nav">
                  확인
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

export default QnAPage;
