"use client";
import { motion, useInView, MotionProps } from "framer-motion";
import Image from "next/image";
import { FC, useRef } from "react";

export const Cubes: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animationProps: Readonly<MotionProps> = Object.freeze({
    initial: { y: 0 },
    animate: isInView ? { y: -40 } : {},
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse",
      duration: 2,
    },
  } as const);

  return (
    <motion.div
      {...animationProps}
      className="absolute top-0 left-0 w-full h-full m-auto"
      ref={ref}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <Image
          src={"/assets/cubes/cube3d.png"}
          alt="Left Cube"
          width={25.269}
          height={27.16}
          className="blur-[5px] rotate-[121.301deg] ml-auto"
        />
        <Image
          src={"/assets/cubes/cube3d.png"}
          alt="Left Cube"
          width={105.74}
          height={113.65}
          className="rotate-[-46.797deg]"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <Image
          src={"/assets/cubes/cube3d.png"}
          alt="Right Cube"
          width={34.017}
          height={36.562}
          className="rotate-[101.911deg] blur-[5px] mb-5"
        />
        <Image
          src={"/assets/cubes/cube3d.png"}
          alt="Right Cube"
          width={92.09}
          height={98.98}
          className="rotate-[116.151deg]"
        />
      </div>
    </motion.div>
  );
};
