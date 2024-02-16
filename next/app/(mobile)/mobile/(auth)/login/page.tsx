import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        <div className="w-[336px] h-[356px] flex-col justify-start items-center gap-[19px] inline-flex">
          <div className="flex-col justify-center items-center gap-4 flex">
            <div className="flex-col justify-center items-center gap-[23px] flex">
              <div className="w-[336px] h-[65px] flex-col justify-center items-start gap-[15px] flex">
                <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                  ID
                </Label>
                <Input
                  placeholder="이메일"
                  type={"email"}
                  className="rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                />
              </div>
              <div className="w-[336px] h-[65px] flex-col justify-center items-start gap-[15px] flex">
                <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                  Password
                </Label>
                <Input
                  placeholder="비밀번호"
                  type={"password"}
                  className="rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                />
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-4 flex">
              <Button className="dark:border dark:border-white text-white text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-black">
                Login
              </Button>
              <Button
                variant={"outline"}
                className="text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
              >
                Sign Up
              </Button>
            </div>
            <div className="justify-center items-center gap-[182px] inline-flex">
              <Link
                href={"/mobile/findId"}
                className="text-black dark:text-white text-[11px] font-normal font-pre"
              >
                find ID/Password
              </Link>
              <div className="text-black dark:text-white text-[11px] font-normal font-pre">
                비회원으로 이용
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="justify-center items-center gap-[9px] inline-flex">
              <div className="w-[100px] h-[0px] border border-gray-200"></div>
              <div className="text-neutral-400 text-[11px] font-medium font-pre">
                SNS 계정으로 로그인/가입
              </div>
              <div className="w-[100px] h-[0px] border border-gray-200"></div>
            </div>
            <div className="h-6 justify-center items-start gap-[30px] inline-flex">
              <div className="w-[97px] pl-[3px] pr-[29px] py-0.5 justify-start items-start gap-1 inline-flex">
                <img className="w-6 h-6" src="/images/kakao.png" />
                <div className="text-neutral-400 text-[13px] font-medium font-pre">
                  kakao
                </div>
              </div>
              <div className="w-[97px] pl-[3px] pr-[29px] py-0.5 justify-start items-start gap-1 inline-flex">
                <img className="w-5 h-5" src="/images/google.png" />
                <div className="text-neutral-400 text-[13px] font-medium font-pre">
                  google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
