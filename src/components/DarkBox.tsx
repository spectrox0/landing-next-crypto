import { FC, PropsWithChildren } from "react";

const paddings = Object.freeze({
  1: "py-[12px] px-[15px]",
  2: "py-[25px] px-[21px]",
  3: "py-[41px] px-[46px]",
} as const);

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  padding?: keyof typeof paddings;
}
export const DarkBox: FC<Props> = ({
  children,
  className = "",
  padding = 1,
}) => {
  return (
    <div
      className={`bg-zinc-900 w-full rounded-[15px] ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
