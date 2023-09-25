import { Icon } from "@/types/common";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const GeckoIcon: FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 28,
  height = 27,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/icons/gecko.svg"}
      width={width as number}
      draggable={false}
      className={`select-none ${className}`}
      height={height as number}
      {...props}
      alt={"Gecko Icon"}
    />
  );
};
