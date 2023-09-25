import { Icon } from "@/types/common";
import { FC } from "react";

export const GroupIcon: Icon = ({
  width = 50,
  height = 50,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        className={
          "transition-all duration-300 ease-in-out fill-[#393943] " + className
        }
        fillRule="evenodd"
        d="M39.584 9.877v6.79a6.25 6.25 0 0 1 0 12.5v6.25c0 3.433-3.92 5.393-6.667 3.333l-4.292-3.22a18.037 18.037 0 0 0-7.791-3.35v5.924a5.646 5.646 0 0 1-11.076 1.55l-3.27-11.45A9.791 9.791 0 0 1 13.417 12.1l6.287-.35a19.466 19.466 0 0 0 8.73-2.623l4.883-2.85c2.779-1.619 6.267.383 6.267 3.6ZM11.738 31.413l2.027 7.097a1.48 1.48 0 0 0 2.902-.406v-6.27l-3.25-.182a9.836 9.836 0 0 1-1.68-.24ZM35.417 9.877l-4.886 2.852a23.63 23.63 0 0 1-9.697 3.113v12.123a22.217 22.217 0 0 1 10.291 4.23l4.292 3.222V9.877Zm-18.75 6.215-3.021.166a5.625 5.625 0 0 0-.354 11.202l.354.032 3.02.166V16.092Zm22.916 4.741V25a2.083 2.083 0 0 0 .244-4.152l-.243-.015Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
