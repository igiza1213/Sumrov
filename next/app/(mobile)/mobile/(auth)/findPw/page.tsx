import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "../../_components/header";

const FindPw = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        <div className="w-[336px] h-[216px] flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="text-black text-[13px] dark:text-white font-medium font-pre">
              비밀번호 찾기
            </div>
            <Input
              className="dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-pre"
              placeholder="아이디"
            />
            <Input
              className="dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-pre"
              placeholder="이름"
            />
            <Input
              className="dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-pre"
              placeholder="이메일"
            />
          </div>
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <Button
              className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
              asChild
            >
              <Link href={"/mobile/findPw2"}>로그인</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPw;
