import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "../../_components/header";

const FindPw2 = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        <div className="w-[336px] h-[174px] flex-col justify-center items-start gap-[76px] inline-flex">
          <div className="flex-col justify-start items-start gap-[23px] flex">
            <div className="text-black dark:text-white text-[13px] font-medium font-pre">
              비밀번호 찾기
            </div>
            <div className="text-black dark:text-white text-[13px] font-medium font-pre">
              등록하신 이메일로 임시 비밀번호를 보내드렸습니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <Button
              className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
              asChild
            >
              <Link href={"/mobile/login"}>로그인</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPw2;
