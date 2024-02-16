import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const yes = true;

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[198px] bg-neutral-50 dark:bg-neutral-900">
        {yes ? (
          <div className="w-[450px] h-[314px] flex-col justify-center items-center gap-[75px] inline-flex">
            <div className="text-black dark:text-neutral-50 text-[28px] font-medium font-pre">
              아이디 찾기
            </div>
            <div className="flex-col justify-center items-start gap-[27px] flex">
              <div className="flex-col justify-center items-start gap-5 flex">
                <div className="flex-col justify-center items-start gap-[5px] flex">
                  <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                    이름 : 로램
                  </div>
                  <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                    휴대폰번호 : 010-2222-2222
                  </div>
                </div>
                <div className="text-black dark:text-neutral-50 text-base font-medium font-pre">
                  아이디 : lorem****
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[15px] flex">
                <Button variant={"login"} className="w-[450px] h-[43px]">
                  Login
                </Button>
                <Button
                  variant={"signup"}
                  className="w-[450px] h-[43px]"
                  asChild
                >
                  <Link href={"/findPw"}>비밀번호 찾기</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[800px] h-[269px] flex-col justify-center items-center gap-[50px] inline-flex">
            <div className="text-black dark:text-neutral-50 text-[28px] font-medium font-pre">
              아이디 찾기
            </div>
            <div className="h-[186px] flex-col justify-center items-center gap-[19px] flex">
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="h-[93px] flex-col justify-center items-center gap-[23px] flex">
                  <div className="w-[450px] justify-between items-center inline-flex">
                    <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                      NAME
                    </Label>
                    <Input
                      placeholder="이름"
                      type={"text"}
                      className="rounded-none w-[336px] h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                    />
                  </div>
                  <div className="w-[450px] justify-between items-center inline-flex">
                    <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                      EMAIL
                    </Label>
                    <Input
                      placeholder="sumrov@email.com"
                      type={"email"}
                      className="rounded-none w-[336px] h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                    />
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-2.5 flex">
                  <Button variant={"login"} className="w-[450px] h-[43px]">
                    확인
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
