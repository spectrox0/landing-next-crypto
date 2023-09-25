// Hight order component to add size to a button

import { BtnProps } from "@/types/button";
import { FC, useMemo } from "react";

//  Props to be passed to the component button
export const sizesBtn = Object.freeze({
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4 text-base",
  lg: "py-4 px-5 text-lg",
} as const);
export const getSizeBtn = (size: keyof typeof sizesBtn) =>
  sizesBtn[size] || sizesBtn.md;
export const withSize = (Component: FC<BtnProps>) =>
  function Btn({ children, className = "", size = "md", ...props }: BtnProps) {
    const sizeClass = getSizeBtn(size);
    return (
      <Component className={`${sizeClass} ${className}`} {...props}>
        {children}
      </Component>
    );
  };
