import { Icon } from "@/types/common";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const CircleIcon: Icon = ({ width = 27, height = 28, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="url(#a)"
        d="M8.448 8.077c3.296 0 5.978 2.657 5.978 5.923s-2.682 5.923-5.978 5.923S2.47 17.266 2.47 14s2.682-5.923 5.978-5.923Zm0-1.077c-3.902 0-7.065 3.134-7.065 7s3.163 7 7.065 7c3.902 0 7.065-3.134 7.065-7S12.35 7 8.448 7Zm11.141 1.615c1.155 0 2.446 2.303 2.446 5.385s-1.291 5.385-2.446 5.385c-1.154 0-2.445-2.303-2.445-5.385s1.291-5.385 2.445-5.385Zm0-1.077c-1.95 0-3.532 2.894-3.532 6.462 0 3.568 1.581 6.462 3.532 6.462s3.533-2.894 3.533-6.462c0-3.568-1.582-6.462-3.533-6.462Zm5.435 3.003c.152.852.272 2.02.272 3.459 0 1.44-.12 2.607-.272 3.459-.152-.852-.272-2.02-.272-3.459 0-1.44.12-2.607.272-3.459Zm0-2.464c-.75 0-1.359 2.652-1.359 5.923s.609 5.923 1.36 5.923c.75 0 1.358-2.652 1.358-5.923s-.608-5.923-1.359-5.923Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={13.883}
          x2={13.883}
          y1={7}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CircleIconImage: FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 27,
  height = 28,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/icons/circle.svg"}
      width={width as number}
      draggable={false}
      className={`select-none ${className}`}
      height={height as number}
      {...props}
      alt={"Circle Icon"}
    />
  );
};
