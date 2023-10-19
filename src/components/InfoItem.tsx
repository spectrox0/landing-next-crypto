import { DataInfo } from "@/types/info";
import { FC } from "react";

type Props = DataInfo;
export const InfoItem: FC<Props> = ({
  info,
  primaryText,
  secondaryText,
  gradient,
}) => {
  return (
    <div className="flex flex-col gap-1 text-center justify-center items-center px-[30px] max-md:py-[10px]">
      <p className="opacity-50 text-white text-sm font-normal leading-[25px]">
        {primaryText}
      </p>
      <span
        className={` px-[25px] py-[5px] rounded-[100px] gap-1 flex justify-center items-center text-white text-sm font-normal ${
          gradient ? "bg-linear-gradient-1" : "bg-zinc-900"
        }`}
      >
        {info}
      </span>
      <p className="opacity-50 text-white text-xs font-normal leading-[25px]">
        {secondaryText}
      </p>
    </div>
  );
};
