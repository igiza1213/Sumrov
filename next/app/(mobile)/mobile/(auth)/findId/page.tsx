import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Header from "../../_components/header";

const FindId = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        <div className="w-[336px] h-[107px] flex-col justify-start items-start gap-[15px] inline-flex">
          <Label className="dark:text-white text-black text-[13px] font-medium font-['Pretendard']">
            아이디 찾기
          </Label>
          <div className="flex-col justify-start items-start gap-2 flex">
            <Input
              placeholder="이름"
              type={"text"}
              className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-['Pretendard']"
            />
            <Input
              placeholder="이메일"
              type={"email"}
              className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-['Pretendard']"
            />
          </div>
        </div>
        <Button
          className="dark:border dark:border-white dark:text-white w-[336px] h-[43px] bg-black rounded-none mt-[24px] font-pre"
          asChild
        >
          <Link href={"/mobile/findId2"}>확인</Link>
        </Button>
      </div>
    </>
  );
};

export default FindId;
