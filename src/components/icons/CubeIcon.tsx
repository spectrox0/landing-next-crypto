import { Icon } from "@/types/common";

export const CubeIcon: Icon = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9ZM12 4.15 6.04 7.5 12 10.85l5.96-3.35L12 4.15ZM5 15.91l6 3.38v-6.71L5 9.21v6.7Zm14 0v-6.7l-6 3.37v6.71l6-3.38Z"
      />
    </svg>
  );
};
