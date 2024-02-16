import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="w-full px-[123px] py-[71px] bg-neutral-50 dark:bg-neutral-900 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch pr-[200px] justify-between items-center inline-flex">
          <div className="flex-col justify-center items-start gap-[15px] inline-flex">
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-neutral-900 dark:text-neutral-50 text-2xl font-bold font-body">
                Header
              </div>
            </div>
            <div className="w-[614px] text-neutral-900 dark:text-neutral-50 text-lg font-normal font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget
              dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc eget
              dictumd nunc eget dictum Sed ornare cursus sed nunc eget dictum
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[21px] inline-flex">
            <div className="py-2.5 justify-start items-center gap-2.5 inline-flex">
              <ChevronRight className="w-[18px] h-[18px] justify-center items-center inline-flex" />

              <div className="text-neutral-900 dark:text-neutral-50 text-base font-bold font-body">
                Button
              </div>
            </div>
            <div className="py-2.5 justify-start items-center gap-2.5 inline-flex">
              <ChevronRight className="w-[18px] h-[18px] justify-center items-center inline-flex" />

              <div className="text-neutral-900 dark:text-neutral-50 text-base font-bold font-body">
                Button
              </div>
            </div>
            <div className="py-2.5 justify-start items-center gap-2.5 inline-flex">
              <ChevronRight className="w-[18px] h-[18px] justify-center items-center inline-flex" />

              <div className="text-neutral-900 dark:text-neutral-50 text-base font-bold font-body">
                Button
              </div>
            </div>
            <div className="py-2.5 justify-start items-center gap-2.5 inline-flex">
              <ChevronRight className="w-[18px] h-[18px] justify-center items-center inline-flex" />

              <div className="text-neutral-900 dark:text-neutral-50 text-base font-bold font-body">
                Button
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
