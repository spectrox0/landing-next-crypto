import { BtnProps } from "@/types/button";
import { FC } from "react";
import { withSize } from "./useSize";

//  Props to be passed to the component button

export const Btn: FC<BtnProps> = withSize(
  ({ children, className = "", ...rest }) => {
    return (
      <button
        className={
          "border-none rounded-lg flex text-center items-center capitalize gap-2 bg-linear-gradient-1 whitespace-nowrap overflow-hidden " +
          className
        }
        {...rest}
      >
        {children}
      </button>
    );
  }
);
