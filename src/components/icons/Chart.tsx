import { Icon } from "@/types/common";

export const ChartIcon: Icon = ({ width = 65, height = 65, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        stroke="url(#chart)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M24.375 51.458v-16.25a2.708 2.708 0 0 0-2.708-2.708H10.833a2.708 2.708 0 0 0-2.708 2.708v16.25a2.708 2.708 0 0 0 2.708 2.709m13.542-2.709a2.708 2.708 0 0 1-2.708 2.709H10.833m13.542-2.709a2.708 2.708 0 0 0 2.708 2.709h10.834a2.708 2.708 0 0 0 2.708-2.709m-16.25 0V24.375a2.708 2.708 0 0 1 2.708-2.708h10.834a2.708 2.708 0 0 1 2.708 2.708v27.083m-29.792 2.709H48.75m-8.125-2.709a2.708 2.708 0 0 0 2.708 2.709h10.834a2.708 2.708 0 0 0 2.708-2.709V13.542a2.708 2.708 0 0 0-2.708-2.709H43.333a2.708 2.708 0 0 0-2.708 2.709v37.916Z"
      />
      <defs>
        <linearGradient
          id="chart"
          x1={32.5}
          x2={32.5}
          y1={10.833}
          y2={54.167}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0420" />
          <stop offset={1} stopColor="#BD2738" />
        </linearGradient>
      </defs>
    </svg>
  );
};
