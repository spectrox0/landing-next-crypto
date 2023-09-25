import { Icon } from "@/types/common";

export const TradeIcon: Icon = ({ width = 12, height = 13, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M3.188 4.25H.562a.375.375 0 0 0-.375.375v7.5c0 .207.168.375.376.375h2.625a.375.375 0 0 0 .375-.375v-7.5a.375.375 0 0 0-.375-.375Zm-.375 7.5H.937V5h1.876v6.75ZM7.31 6.48H4.684a.375.375 0 0 0-.375.375v5.27c0 .207.167.375.375.375h2.625a.375.375 0 0 0 .375-.375v-5.27a.375.375 0 0 0-.375-.375Zm-.375 5.27H5.06V7.23h1.875v4.52ZM11.438.5H8.816a.375.375 0 0 0-.375.375v11.25c0 .207.167.375.375.375h2.621a.375.375 0 0 0 .376-.375V.875A.375.375 0 0 0 11.437.5Zm-.374 11.25H9.19V1.25h1.871v10.5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
