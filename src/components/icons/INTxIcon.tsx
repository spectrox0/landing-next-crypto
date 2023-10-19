import Image from "next/image";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}
export const INTXIcon: FC<Props> = ({ width = 34, height = 34 }) => {
  return (
    <Image
      alt=""
      width={width}
      height={height}
      draggable={false}
      src="/assets/icons/xintx.png"
    />
  );
};
