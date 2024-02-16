import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "../../_components/header";

const FindId2 = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        <div className="w-[336px] h-[225px] flex-col justify-start items-start gap-[27px] inline-flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-black dark:text-white text-[13px] font-medium font-pre">
              아이디 찾기
            </div>
            <div className="">
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                이름 : 로램
              </div>
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                휴대폰번호 : 010-2222-2222
              </div>
            </div>
            <div className="text-black dark:text-white text-xs font-normal font-pre">
              아이디 : lorem****
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <Button
              className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
              asChild
            >
              <Link href={"/mobile/login"}>로그인</Link>
            </Button>
            <Button
              variant={"outline"}
              className="text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
              asChild
            >
              <Link href={"/mobile/findPw"}>비밀번호 찾기</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindId2;
