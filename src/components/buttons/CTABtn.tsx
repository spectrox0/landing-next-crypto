import { BtnProps } from "@/types/button";
import { FC } from "react";
import { LinkIcon } from "../icons/Link";
import { Icon } from "@/types/common";

export const CTABtn: FC<BtnProps & { icon?: Icon }> = ({
  children,
  className,
  icon: Icon = LinkIcon,
  ...props
}) => {
  return (
    <button
      className={`bg-transparent cursor-pointer  text-clip flex gap-1 items-center outline-none focus:outlined-none p-2 ${className} grayscale hover:grayscale-0 duration-500 transition-grayscale`}
      {...props}
    >
      <Icon />
      <span className="text-gradient bg-clip-text">{children}</span>
    </button>
  );
};
