import { FC } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

export const HandsSection: FC = () => {
  return (
    <section className="h-full w-full relative">
      <Image
        src="/assets/background/bg1.png"
        className="mx-auto mix-blend-lighten w-full h-full absolute top-0 left-0 object-cover object-center select-none"
        fill
        draggable={false}
        alt="./"
      />
      <Image
        src="/assets/background/bg_hands.png"
        className="m-auto mix-blend-lighten max-w-full select-none"
        width={1000}
        height={603}
        draggable={false}
        alt="./"
      />
      <p className="font-medium text-3xl text-center max-w-[447px] mx-auto whitespace-nowrap absolute bottom-[15%] left-1/2 -translate-x-1/2">
        Where <b>Intent</b> Meets <b>Execution</b>
      </p>
    </section>
  );
};
