import Image, { ImageProps } from "next/image";
import * as React from "react";
export const MainLogo: React.FC<Omit<ImageProps, "alt" | "src">> = ({
  width = 181,
  height = 41,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/logo/main_logo.svg"}
      width={width as number}
      height={height}
      draggable={false}
      className={`select-none ${className} h-auto max-w-100%`}
      {...props}
      alt={"Main Icon"}
    />
  );
};
