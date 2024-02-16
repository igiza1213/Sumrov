import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";
import React from "react";

const data = [{}, {}, {}, {}, {}];

const QnAPage = () => {
    return (
        <>
            <div className="w-full h-9 bg-gray-600 flex items-center justify-between px-[10px]">
                <div className="text-center text-neutral-50 text-sm font-medium font-pre">
                    상품정보선택
                </div>
                {/* <Link href={"/mobile/shop"}> */}
                <X
                    strokeWidth={1}
                    className="w-[26px] h-[26px] text-neutral-50"
                />
                {/* </Link> */}
            </div>
            <div className="w-[355px] h-[42px] ml-[10px] mt-[5px] relative">
                <div className="w-[355px] h-[42px] left-0 top-0 absolute bg-neutral-200" />
                <div className="left-[6px] top-[8px] absolute justify-start items-center gap-[5px] inline-flex">
                    <div className="w-[90px] h-[26px] relative">
                        <div className="w-[90px] h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="w-[30px] h-2.5 left-[8px] top-[7px] bottom-[7px] absolute text-neutral-400 text-[10px] font-semibold font-nav">
                            상품명
                        </div>
                        <div className="w-6 h-[0px] left-[59px] top-[1px] absolute origin-top-left rotate-90 border border-neutral-300"></div>
                        <div className="left-[62px] top-[1px] absolute">
                            <ChevronDown className="w-6 h-6 text-neutral-400 rotate-270" />
                        </div>
                    </div>
                    <div className="w-[205px] h-[26px] bg-neutral-50 rounded-sm border border-neutral-300" />
                    <div className="w-[39px] h-[23px] relative">
                        <div className="w-[39px] h-[23px] left-0 top-0 absolute bg-neutral-400" />
                        <div className="w-[21.79px] h-2.5 left-[9px] top-[5px] absolute text-center text-neutral-50 text-[10px] font-light font-nav">
                            검색
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[300px] h-[13px] ml-[10px]">
                <span
                    style={{
                        color: "black",
                        fontSize: "11px",
                        fontWeight: "normal",
                        fontFamily: "Pretendard",
                        letterSpacing: "wide",
                    }}
                >
                    총{" "}
                </span>
                <span
                    style={{
                        color: "blue",
                        fontSize: "11px",
                        fontWeight: "normal",
                        fontFamily: "Pretendard",
                        letterSpacing: "wide",
                    }}
                >
                    15
                </span>
                <span
                    style={{
                        color: "black",
                        fontSize: "11px",
                        fontWeight: "normal",
                        fontFamily: "Pretendard",
                        letterSpacing: "wide",
                    }}
                >
                    개 의 상품이 검색되었습니다.
                </span>
            </div>
            <div className="w-[355px] h-[531px] mt-[30px] ml-[10px] bg-neutral-50 border gap-[12px] border-neutral-300">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-[336px] h-[93.28px] flex ml-[13px] relative",
                            index == 0 ? "my-[6px]" : "my-[12px]"
                        )}
                    >
                        <img
                            className="w-[70px] h-[93.28px] border border-black"
                            src="https://via.placeholder.com/70x93"
                            alt={`Item ${index + 1}`}
                        />
                        <div className="flex flex-col ml-[12px]">
                            <div className="w-[210px] mt-[22px] text-black text-xs font-normal font-nav">
                                로램잇섬 여우원숭이와 펭귄 황제펭귄
                            </div>
                            <div className="text-black text-[11px] mt-[19px] font-semibold font-['Pretendard']">
                                KRW 10,000
                            </div>
                        </div>
                        <div className="w-[39px] h-[93.28px]  flex-shrink-0 flex flex-col items-center justify-center">
                            <div className="w-[39px] h-[23px] mr-[-14.8px] bg-neutral-400" />
                            <div className="w-[21.79px] h-2.5 text-center text-neutral-50 bg-neutral-400 mt-[-19px] mr-[-13px] text-[10px] font-light font-nav">
                                선택
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-black text-[11px] mt-[29px] ml-[149px] font-medium font-['Inter']">
                Load more (1/3)
            </div>
        </>
    );
};

export default QnAPage;
