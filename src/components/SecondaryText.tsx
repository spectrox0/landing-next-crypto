import { FC, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>> {}
export const SecondaryText: FC<Props> = ({ children, className = "" }) => {
  return (
    <p className={`opacity-50 text-white text-sm font-normal ${className}`}>
      {children}
    </p>
  );
};
