import { FC } from "react";

interface Props {
  progress: number;
  className?: string;
  label?: string;
}
export const BarProgress: FC<Props> = ({ progress = 30, className = "" }) => {
  return (
    <div className={`w-full h-[33px] relative ${className}`}>
      <div className="w-full h-[33px] left-0 top-0 absolute opacity-50 bg-zinc-900 rounded-[100px]" />
      <div
        style={{ width: `${progress}%` }}
        className="h-[33px] left-0 top-0 absolute opacity-40 bg-gradient-to-b from-slate-600 to-zinc-700 rounded-[100px]"
      />
    </div>
  );
};
