import { FC } from "react";

// hamburger menu with tailwind css
export const HamburgerMenu: FC = () => {
  return (
    <button className="rounded-[10px] bg-linear-gradient-1 grayscale hover:grayscale-0 duration-300 transition-[filter]  p-[10px] flex flex-col gap-1 relative w-[35px] h-[35px] justify-around  border-none cursor-pointer focus:outline-none">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="
        w-full h-[2px]
        bg-white 
        align-center
        justify-center
        rounded
        transition-all
        duration-500"
        ></div>
      ))}
    </button>
  );
};
