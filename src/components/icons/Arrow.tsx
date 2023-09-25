import { Icon } from "@/types/common";

export const Arrow: Icon = ({
  width = 16,
  fill = "#fff",
  height = 16,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{"ic_fluent_ios_arrow_left_24_regular"}</title>
      <path
        fill={fill}
        fillRule="nonzero"
        d="m4.296 12 8.492-8.727a.75.75 0 1 0-1.076-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.076-1.046L4.296 12Z"
      />
    </svg>
  );
};
