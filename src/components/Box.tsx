import { FC, PropsWithChildren } from "react";

// extends props from div html element
const Paddings = Object.freeze({
  1: "px-[46px] py-[41px]",
  2: "py-4 px-4",
});
interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  padding?: keyof typeof Paddings;
  blur?: boolean;
}
export const Box: FC<Props> = ({
  children,
  padding = 1,
  className = "",
  blur = false,
}) => {
  const paddingStyles = Paddings[padding];
  const blurStyles = blur ? "bg-box/50 backdrop-blur-md " : "bg-box";
  return (
    <div
      className={`${blurStyles} ${paddingStyles} w-full rounded-[15px]  ${className}`}
    >
      {children}
    </div>
  );
};
