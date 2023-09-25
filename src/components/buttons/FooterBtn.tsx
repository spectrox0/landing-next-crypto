import { BtnProps } from "@/types/button";
import type { Icon } from "@/types/common";
import { ImageProps } from "next/image";
import { FC } from "react";

interface Props extends Omit<BtnProps, "children"> {
  icon: Icon | FC<Omit<ImageProps, "src" | "alt">>;
  iconSize?: {
    width: number;
    height: number;
  };
}
export const FooterBtn: FC<Props> = ({
  icon: IconBtn,
  className,
  iconSize,
  ...props
}) => {
  return (
    <button
      className={`w-[27px] h-[27px] outline-none focus:outline-none p-1  rounded-[5px] border border-white/10 flex-col justify-center items-center gap-2.5 inline-flex group  ${className}`}
      {...props}
    >
      <IconBtn
        width={iconSize?.width}
        height={iconSize?.height}
        className="group-hover:opacity-50 transition-opacity duration-200 ease-in-out w-[90%] h-[90%] m-auto"
      />
    </button>
  );
};
