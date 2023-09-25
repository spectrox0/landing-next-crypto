import Image from "next/image";
import { FC } from "react";

export const CurveHeader: FC = () => {
  return (
    <Image
      alt=""
      width={738}
      height={738}
      draggable={false}
      src="/assets/curves/curves_left.png"
      className="w-[738px] h-[738px] origin-top-left rotate-[-50.64deg] opacity-30 mix-blend-lighten select-none absolute top-0 left-0 -translate-x-[65%] -translate-y-[13%] max-w-[50%] "
    />
  );
};
