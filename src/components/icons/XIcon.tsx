import { Icon } from "@/types/common";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const XIcon: Icon = ({ width = 28, height = 27, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="url(#twitter)"
        d="m12.472 15.113-.928.965a4136.2 4136.2 0 0 0-4.55 4.758.47.47 0 0 1-.392.164c-.388-.012-.777-.004-1.22-.004l6.44-6.725-6.386-8.254c.07-.006.116-.014.162-.014 1.535 0 3.07 0 4.606-.002a.284.284 0 0 1 .251.121c1.322 1.714 2.645 3.426 3.972 5.137l.155.191c.03-.054.045-.105.078-.14l4.953-5.177a.37.37 0 0 1 .305-.131c.356.008.711.002 1.067.003.053 0 .107.006.198.011l-5.98 6.244 6.751 8.726c-.082.004-.135.01-.188.01-1.524 0-3.048 0-4.572.003a.301.301 0 0 1-.15-.028.288.288 0 0 1-.116-.099 2736.988 2736.988 0 0 0-4.306-5.569l-.15-.19Zm7.341 4.846c-.056-.077-.092-.131-.131-.181l-2.919-3.77-6.847-8.854a.286.286 0 0 0-.252-.122c-.644.005-1.287.002-1.93.002-.047 0-.094.007-.159.012.04.055.064.09.091.125l6.07 7.844c1.242 1.606 2.486 3.212 3.73 4.817.045.057.128.12.194.122.705.008 1.41.005 2.153.005Z"
      />
      <defs>
        <linearGradient
          id="twitter"
          x1={13.668}
          x2={13.668}
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

export const XIconImage: FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 28,
  height = 27,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={"/assets/icons/x.svg"}
      width={width as number}
      draggable={false}
      className={`select-none ${className}`}
      height={height as number}
      {...props}
      alt={"X Icon"}
    />
  );
};
