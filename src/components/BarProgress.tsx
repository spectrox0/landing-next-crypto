import { FC } from "react";

const sizes = Object.freeze({
  1: "h-[33px]",
  2: "h-[5px]",
  3: "h-[60px]",
} as const);
interface Props {
  progress: number;
  className?: string;
  label?: string;
  size?: keyof typeof sizes;
}

export const BarProgress: FC<Props> = ({
  progress = 30,
  className = "",
  label = null,
  size = 1,
}) => {
  const height = sizes[size];
  return (
    <div
      className={`w-full ${height} relative ${className} bg-zinc-900/50 rounded-[100px]`}
    >
      <div
        style={{ width: `${progress}%` }}
        className={`${
          label ? "h-auto" : height
        } bg-gradient-to-b from-red-600 to-rose-700 rounded-[inherit] min-h-full flex items-center py-1 px-2 text-center justify-center`}
      >
        {label}
      </div>
    </div>
  );
};
