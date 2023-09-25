import { Icon } from "@/types/common";

export const HeadPhoneIcon: Icon = ({ width = 12, height = 13, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 13"
      {...props}
    >
      <path
        fill="url(#paint0_linear_936_3741)"
        d="M6 1.5c-2.757 0-5 2.243-5 5v2.072c0 .512.448.928 1 .928h.5A.5.5 0 003 9V6.428a.5.5 0 00-.5-.5h-.454A4.002 4.002 0 016 2.5a4.002 4.002 0 013.954 3.428H9.5a.5.5 0 00-.5.5V9.5c0 .552-.448 1-1 1H7V10H5v1.5h3c1.103 0 2-.897 2-2 .552 0 1-.416 1-.928V6.5c0-2.757-2.243-5-5-5z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_936_3741"
          x1="6"
          x2="6"
          y1="1.5"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420"></stop>
          <stop offset="1" stopColor="#BD2738"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
