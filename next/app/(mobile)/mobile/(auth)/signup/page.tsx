import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "../../_components/header";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px] px-[19.5px] pb-[41px]">
        <div className="flex-col justify-start items-start gap-[31px] flex">
          <div className="flex-col justify-start items-start gap-3.5 flex">
            <div className="h-[30px] border-b border-gray-200 w-full">
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                기본정보
              </div>
            </div>
            <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
              <Label className=" flex gap-0.5">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  이름
                </div>
                <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                  *
                </div>
              </Label>
              <Input
                className="w-[336px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                placeholder="이름"
                type={"text"}
              />
            </div>
            <div className="flex-col justify-start items-start gap-[9px] flex">
              <Label className=" flex gap-0.5">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  E-mail
                </div>
                <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                  *
                </div>
              </Label>
              <div className="justify-start items-center gap-1.5 inline-flex">
                <Input
                  className="w-[157px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder="이메일"
                  type={"text"}
                />
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  @
                </div>
                <Input
                  className="w-[157px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder=""
                  type={"text"}
                />
              </div>
            </div>
            <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
              <Label className=" flex gap-0.5">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  Passward
                </div>
                <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                  *
                </div>
              </Label>
              <Input
                className="w-[336px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                placeholder="비밀번호"
                type={"password"}
              />
            </div>
            <div className="text-neutral-400 text-[11px] font-medium font-pre">
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자)
            </div>
            <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
              <Label className=" flex gap-0.5">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  Passward 확인
                </div>
                <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                  *
                </div>
              </Label>
              <Input
                className="w-[336px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                placeholder="비밀번호"
                type={"password"}
              />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-7 flex">
            <div className="h-[30px] border-b border-gray-200 w-full">
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                배송지
              </div>
            </div>
            <div className="justify-start items-start gap-[10px] flex-col flex">
              <Label className=" flex">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  주소
                </div>
              </Label>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <Input
                    className="w-[106px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                    placeholder="기본주소"
                    type={"text"}
                  />
                  <div className="w-[106px] h-[34px] flex justify-center items-center bg-gray-200 rounded-none dark:placeholder:text-neutral-400 dark:bg-gray-200 dark:border-neutral-300  border border-neutral-300">
                    <div className="flex items-center dark:text-black justify-center text-black text-[13px] font-medium font-pre">
                      주소검색
                    </div>
                  </div>
                </div>
                <Input
                  className="w-[336px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder="기본주소"
                  type={"text"}
                />
                <Input
                  className="w-[336px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder="상세주소 (선택)"
                  type={"text"}
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[9px] flex">
              <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                휴대전화
              </div>
              <div className="justify-start items-center gap-1.5 inline-flex">
                <Input
                  className="w-[100px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder=""
                  type={"text"}
                />
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  -
                </div>
                <Input
                  className="w-[100px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder=""
                  type={"text"}
                />
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  -
                </div>
                <Input
                  className="w-[100px] h-[34px] border-neutral-300 rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  text-neutral-400 text-[13px] font-medium font-pre"
                  placeholder=""
                  type={"text"}
                />
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[29px] flex">
            <div className="justify-start items-center gap-[9px] inline-flex">
              <div className="w-[18px] h-[18px] bg-neutral-50 rounded-[3px] border border-neutral-300" />
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                모두 동의합니다
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[7px] flex">
              <div className="w-[335px] h-[15px] justify-start items-start gap-[191px] inline-flex">
                <div className="justify-start items-center gap-[7px] flex">
                  <div className="text-neutral-400 text-[11px] font-medium font-pre">
                    [필수] 이용약관 동의
                  </div>
                  <div className="w-[15px] h-[15px] bg-neutral-50 rounded-[3px] border border-neutral-300" />
                </div>
                <div className="text-neutral-400 text-[9px] font-medium font-pre">
                  약관보기
                </div>
              </div>
              <div className="w-[335px] h-[15px] justify-start items-start gap-[135px] inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="text-neutral-400 text-[11px] font-medium font-pre">
                    [필수] 개인정보 수집 및 이용 동의
                  </div>
                  <div className="w-[15px] h-[15px] bg-neutral-50 rounded-[3px] border border-neutral-300" />
                </div>
                <div className="text-neutral-400 text-[9px] font-medium font-pre">
                  약관보기
                </div>
              </div>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="text-black dark:text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
