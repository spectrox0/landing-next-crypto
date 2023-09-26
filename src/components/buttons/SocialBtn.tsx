"use client";
import { FC, useMemo } from "react";
import { socialIcons } from "../icons/socialIcons";
import {
  BookIcon,
  BookIconImage,
  CircleIcon,
  CircleIconImage,
  DiscordIcon,
  DiscordIconImage,
  XIcon,
  XIconImage,
} from "../icons";

// extends props from button in html
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: SocialIcons;
};

export type SocialIcons = "x" | "discord" | "circle" | "book";
const icons: Record<SocialIcons, (typeof socialIcons)[number]> = {
  ["x"]: XIcon,
  ["discord"]: DiscordIcon,
  ["circle"]: CircleIcon,
  ["book"]: BookIcon,
};

export const SocialBtn: FC<Props> = ({ icon, className, ...rest }) => {
  const Icon = useMemo(() => icons[icon], [icon]);
  return (
    //  styles to  icon circle button with background transparent and hover effect
    <button
      className={`bg-transparent rounded-full w-[28px] h-[28px] flex align-center justify-center border-none transition-transform duration-300 hover:scale-[1.15] origin-center  ${className}`}
      {...rest}
    >
      <Icon height={27} className="h-[27px] w-auto" />
    </button>
  );
};
