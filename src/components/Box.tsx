import { FC, PropsWithChildren } from "react";

// extends props from div html element
interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {}
export const Box: FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-box  w-full rounded-[15px] px-[46px] py-[41px] ${className}`}
    >
      {children}
    </div>
  );
};
