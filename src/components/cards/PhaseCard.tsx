import { FC } from "react";
import { CubeIcon } from "@/components/icons/CubeIcon";
import { GroupIcon } from "../icons/GroupIcon";
import { OutlinedBtn } from "../buttons/OutlinedBtn";
import { formatDate } from "@/utils/date";
import { LoadingSpinner } from "../SpinnerLoading";
import { Phase, Status } from "@/utils/data";
import { BtnProps } from "@/types/button";
interface Props extends Phase {
  btnText?: string;
  btnProps?: Omit<BtnProps, "children">;
}

export const PhaseCard: FC<Props> = ({
  title,
  description,
  number,
  status,
  btnText = "Coming Soon",
  statusDescription,
  btnProps,
}) => {
  return (
    <div className="h-full relative phase-card p-[2px]">
      <span className="arrow absolute w-[52px] z-[-1] flex justify-center h-[2px] bottom-1/3 right-[1px] translate-y-1/2 translate-x-full bg-[#4D566C]">
        <div className="rounded-full w-[6px] h-[6px] left-1/2 top-1/2 bg-inherit absolute -translate-x-1/2 -translate-y-1/2"></div>
      </span>
      <div className="max-w-[431px] flex flex-col z-10 rounded-xl  h-full bg-transparent px-0 py-0 border-transparent hover:shadow-primary transition-[box-shadow] duration-300 group">
        <header className="bg-bg-1  pt-[23px] pb-[34px] px-[23px] bg-linear-gradient-4 relative flex flex-col gap-2 rounded-t-xl ">
          <span className="absolute bg-clip-text top-0 left-[5px] opacity-30 text-[128px] number-phase font-extralight">
            {number}
          </span>
          <div className="flex justify-end ml-auto w-full">
            <CubeIcon />
          </div>
          <span className="relative z-10  capitalize whitespace-nowrap px-[25px] py-[6px] self-start inline-flex line-clamp-1 items-center rounded-full bg-linear-gradient-1 duration-300 transition-all group-hover:brightness-150">
            {`phase ${number}`}
          </span>
          <h3 className="text-white text-3xl font-bold whitespace-nowrap ">
            {title}
          </h3>
        </header>
        <div className="bg-box flex-1 flex flex-col gap-7 flex-grow-1 px-8 py-7">
          {/*  styles to recognize \n in the paragraph */}
          <p className="text-white text-sm font-normal whitespace-pre-wrap ">
            {description}
          </p>
          <OutlinedBtn className="self-center mt-auto" {...btnProps}>
            {btnText}
          </OutlinedBtn>
        </div>
        <footer className="flex gap-2 flex-wrap items-center justify-center  min-h-[133px] w-full bg-bg-1 rounded-b-xl">
          <div className="flex items-center gap-3">
            {status === "onGoing" ? (
              <LoadingSpinner color="yellow" />
            ) : (
              <GroupIcon className="group-hover:fill-[#E22339]" />
            )}
            <div className="flex flex-col gap-[1px]">
              {!statusDescription ? (
                <span className="text-white line-clamp-1  opacity-50 font-semibold  text-xs">
                  Status
                </span>
              ) : null}
              <span className="text-white font-semibold text-xl line-clamp-1 ">
                {Status[status].title}
              </span>
              {statusDescription ? (
                <span className="text-white line-clamp-1  opacity-50 font-semibold  text-xs">
                  {statusDescription}
                </span>
              ) : null}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
