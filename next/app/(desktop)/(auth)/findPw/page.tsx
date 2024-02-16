import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const yes = true;

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[198px] bg-neutral-50 dark:bg-neutral-900">
        {yes ? (
          <div className="w-[800px] h-[352px] flex-col justify-center items-center gap-[75px] inline-flex">
            <div className="flex-col justify-start items-center gap-[70px] flex">
              <div className="text-black text-[28px] font-medium font-pre">
                비밀번호 찾기
              </div>
            </div>
            <div className="h-[244px] flex-col justify-center items-center gap-[19px] flex">
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="h-[151px] flex-col justify-center items-center gap-[23px] flex">
                  <div className="w-[450px] justify-between items-center inline-flex">
                    <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                      ID
                    </Label>
                    <Input
                      placeholder="SUMROV"
                      type={"text"}
                      className="rounded-none w-[336px] h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                    />
                  </div>
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
                  <div className="flex-col justify-center items-center gap-[15px] flex">
                    <div className="w-[450px] px-[150px] py-[13px] bg-neutral-900 justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white text-sm font-normal font-pre">
                        확인
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[450px] h-[242px] flex-col justify-center items-center gap-[75px] inline-flex">
            <div className="flex-col justify-start items-center gap-[70px] flex">
              <div className="text-black text-[28px] font-medium font-pre">
                비밀번호 찾기
              </div>
            </div>
            <div className="h-4 flex-col justify-center items-center gap-[23px] flex">
              <div className="text-black text-[13px] font-medium font-pre">
                등록하신 이메일로 임시 비밀번호를 보내드렸습니다.
              </div>
            </div>
            <Button variant={"login"} className="w-[450px] h-[43px]">
              확인
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
