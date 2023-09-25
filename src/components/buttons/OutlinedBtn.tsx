import { BtnProps } from "@/types/button";
import { Component, FC, ReactNode, useMemo } from "react";
import { withSize } from "./useSize";

export const OutlinedBtn: FC<BtnProps> = withSize(
  ({ children, className, ...rest }) => {
    return (
      <button
        className={`border rounded-lg flex text-center items-center capitalize gap-2 bg-linear-gradient-3 border-primary whitespace-nowrap overflow-hidden duration-300 transition-[filter] 
          ${
            rest.disabled
              ? "opacity-50 cursor-not-allowed"
              : " hover:brightness-150"
          }
            ${className} `}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
