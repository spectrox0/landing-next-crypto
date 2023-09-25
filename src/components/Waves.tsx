import Image from "next/image";
import { FC } from "react";

interface Props {
  className?: string;
}
export const Waves: FC<Props> = () => {
  return (
    <div className="w-full absolute bottom-0 h-full overflow-hidden left-0  ">
      <Image
        alt=""
        src="/assets/background/waves/white.png"
        className="h-auto w-full bottom-0 left-0 absolute mix-blend-overlay wave mt-auto"
        objectFit="contain"
        objectPosition="center"
        fill
      />
      <div className="bg-gradient-backdrop-2 w-full h-full absolute top-0 left-0" />
    </div>
  );
};

export const WaveRed: FC<Props> = () => {
  return (
    <div className="w-full absolute top-0 h-full overflow-hidden left-0 ">
      <Image
        alt=""
        className=" h-auto bottom-3/4 translate-y-[10%] left-0 w-full absolute wave opacity-30"
        objectFit="contain"
        objectPosition="center"
        src="/assets/background/waves/red.png"
        fill
      />
      <div className="bg-gradient-backdrop-2 w-full h-full absolute top-0 left-0" />
    </div>
  );
};
