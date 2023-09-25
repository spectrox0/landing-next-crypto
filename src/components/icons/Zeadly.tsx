import { Icon } from "@/types/common";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const ZeadlyIcon: FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 64,
  height = 65,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/icons/zeadly.svg"}
      width={width as number}
      draggable={false}
      className={`select-none ${className}`}
      height={height as number}
      {...props}
      alt={"Zeadly Icon"}
    />
  );
};
