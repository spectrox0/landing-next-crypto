import { FC } from "react";

interface Props {
  title: string;
  number: string;
}
export const TitlePhase: FC<Props> = ({ number, title }) => {
  return (
    <div className="relative flex flex-col gap-2 max-md:pt-16">
      <span className="absolute leading-none flex items-center  bg-clip-text bottom-0 -left-5 opacity-30 text-[128px] number-phase font-extralight text-center max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-0 max-md:bottom-[unset]">
        {number}
      </span>
      <h3 className="text-white text-3xl font-bold relative z-10 max-md:text-center">
        {title}
      </h3>
      <span className="relative z-10 max-md:self-center max-md:mx-auto  capitalize whitespace-nowrap px-[25px] py-[6px] self-start inline-flex line-clamp-1 items-center rounded-full bg-linear-gradient-1 duration-300 transition-all group-hover:bg-linear-gradient-5">
        {`phase ${number}`}
      </span>
    </div>
  );
};
