import { FC } from "react";

interface Props {
  title: string;
  number: string;
}
export const TitlePhase: FC<Props> = ({ number, title }) => {
  return (
    <div className="relative flex flex-col gap-2">
      <span className="absolute leading-none flex items-center  bg-clip-text bottom-0 -left-5 opacity-30 text-[128px] number-phase font-medium">
        {number}
      </span>
      <h3 className="text-white text-3xl font-bold whitespace-nowrap relative z-10">
        {title}
      </h3>
      <span className="relative z-10  capitalize whitespace-nowrap px-[25px] py-[6px] self-start inline-flex line-clamp-1 items-center rounded-full bg-linear-gradient-1 duration-300 transition-all group-hover:bg-linear-gradient-5">
        {`phase ${number}`}
      </span>
    </div>
  );
};
