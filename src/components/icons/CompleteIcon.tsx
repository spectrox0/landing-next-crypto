import { Icon } from "@/types/common";

export const CompleteIcon: Icon = ({ width = 45, height = 45, ...props }) => {
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
        d="M19.206 30.589 11.25 22.63l2.651-2.65 5.305 5.302L29.81 14.676l2.653 2.653-13.258 13.256v.004Z"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M1.875 22.5c0-11.39 9.234-20.625 20.625-20.625 11.39 0 20.625 9.234 20.625 20.625 0 11.39-9.234 20.625-20.625 20.625-11.39 0-20.625-9.234-20.625-20.625ZM22.5 39.375a16.876 16.876 0 1 1 0-33.752 16.876 16.876 0 0 1 0 33.752Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="a"
          x1={21.857}
          x2={21.857}
          y1={14.676}
          y2={30.589}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={22.5}
          x2={22.5}
          y1={1.875}
          y2={43.125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
      </defs>
    </svg>
  );
};
