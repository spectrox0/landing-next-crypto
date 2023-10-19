import { Icon } from "@/types/common";

export const SwapIcon: Icon = ({ width = 15, height = 16, color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      fill="none"
      viewBox="0 0 15 16"
    >
      <path
        fill={color}
        d="M4.375 13L1.25 9.875 4.375 6.75l.875.89-1.61 1.61h4.485v1.25H3.641l1.609 1.61-.875.89zm6.25-3.75l-.875-.89 1.61-1.61H6.874V5.5h4.484L9.75 3.89l.875-.89 3.125 3.125-3.125 3.125z"
      ></path>
    </svg>
  );
};
