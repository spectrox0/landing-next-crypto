"use client";
import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
export const Curves: FC = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  return (
    <div className="absolute top-0 left-0 w-full h-full" ref={ref}>
      <Image
        src={"/assets/curves/curves_left.png"}
        alt="Curve 1"
        width={738}
        draggable={false}
        objectPosition="center center"
        height={738}
        className={`absolute top-1/2 left-0 -translate-y-1/2 transition-transform  mix-blend-lighten ease-in-out duration-[3s]  -translate-x-3/4 select-none w-[738px] h-auto origin-center ${
          inView ? "rotate-[169.43deg]" : "rotate-0"
        } `}
      />
      <Image
        src={"/assets/curves/curves_left.png"}
        alt="Curve 2"
        width={738}
        draggable={false}
        objectPosition="center center"
        height={738}
        className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-3/4 ease-in-out duration-[1.5s] transition-transform h-auto  select-none w-[738px] origin-center mix-blend-lighten ${
          inView ? "rotate-[-48.04deg]" : "rotate-0"
        }`}
      />
    </div>
  );
};
