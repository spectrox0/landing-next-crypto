import Image from "next/image";
import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}
export const EthereumIcon: FC<Props> = ({ width = 34, height = 34 }) => {
  return (
    <Image
      alt="ethereum"
      width={width}
      height={height}
      draggable={false}
      src="/assets/icons/eth.png"
    />
  );
};
