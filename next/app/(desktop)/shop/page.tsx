import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Footer from "../_components/footer";
import Header from "../_components/header";

const data: {}[] = [{}, {}, {}];

const ShopPage = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[188px] bg-neutral-50 pb-[142px] gap-[50px]">
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
          <div className="text-neutral-900 dark:text-neutral-50 text-lg font-bold font-nav tracking-widest">
            ALL
          </div>
          <div className="justify-center items-center gap-[100px] inline-flex">
            <div className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav">
              ALL
            </div>
            <div className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav">
              TOP
            </div>
            <div className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav">
              BOTTOM
            </div>
            <div className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav">
              ACC
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-[100px]">
          {data.map((args, i) => (
            <div className="gap-[50px] w-full flex" key={i}>
              {data.map((arg, j) => (
                <div
                  key={j}
                  className="w-[300px] h-[480px] flex-col justify-center items-center gap-[10px] inline-flex"
                >
                  <img
                    className="w-[300px] h-[380px] shadow"
                    src="https://via.placeholder.com/300x380"
                  />
                  <div className="w-[134px] flex-col justify-center items-center gap-[5px] flex">
                    <div className="text-black dark:text-neutral-50 text-[13px] font-medium font-body leading-none">
                      Lorem ipsum dolor sit
                    </div>
                    <div className="text-black dark:text-neutral-50 text-[15px] font-semibold font-body">
                      29,900$
                    </div>
                    <div className="text-black dark:text-neutral-50 text-[11px] font-light font-body">
                      Lorem ipsum dolor sit
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="h-6 justify-center items-center gap-2 flex">
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
      <Footer />
    </>
  );
};

export default ShopPage;
