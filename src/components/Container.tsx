import { FC } from "react";

// Container with tailwind css with common max with and margin auto
interface Props {
  children: React.ReactNode;
  className?: string;
}
export const Container: FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto 2xl:w-4/5 w-11/12 max-w-[1615px] ${className}`}>
      {children}
    </div>
  );
};
