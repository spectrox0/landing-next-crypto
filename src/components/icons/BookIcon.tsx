import { Icon } from "@/types/common";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const BookIcon: Icon = ({ width = 28, height = 27, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="url(#book)"
        d="M12.753 18.505a.61.61 0 1 1-.002 1.22.61.61 0 0 1 .002-1.22Zm9.563-3.77a.608.608 0 0 1-.43-1.042.61.61 0 1 1 .43 1.041Zm0-2.495a1.888 1.888 0 0 0-1.886 1.885c0 .203.034.404.1.6L14.3 18.04a1.879 1.879 0 0 0-1.547-.813 1.89 1.89 0 0 0-1.692 1.055l-5.596-2.951c-.591-.31-1.034-1.284-.987-2.17.024-.463.184-.822.428-.96.154-.087.34-.08.538.023l.036.02c1.483.78 6.336 3.337 6.54 3.431.316.147.49.206 1.029-.05l10.03-5.216c.148-.056.32-.197.32-.411 0-.297-.307-.414-.308-.414-.57-.273-1.448-.684-2.303-1.084-1.829-.856-3.9-1.826-4.81-2.303-.787-.412-1.42-.065-1.532.005l-.219.108c-4.096 2.026-9.578 4.74-9.89 4.93-.558.341-.904 1.018-.95 1.859-.069 1.333.61 2.724 1.583 3.233l5.918 3.052A1.887 1.887 0 0 0 12.753 21a1.889 1.889 0 0 0 1.885-1.856l6.518-3.533a1.884 1.884 0 0 0 2.493-2.82 1.888 1.888 0 0 0-1.333-.552"
      />
      <defs>
        <linearGradient
          id="book"
          x1={13.792}
          x2={13.792}
          y1={6}
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

export const BookIconImage: FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 28,
  height = 27,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/icons/book.svg"}
      width={width as number}
      draggable={false}
      className={`select-none ${className}`}
      height={height as number}
      {...props}
      alt={"Book Icon"}
    />
  );
};
