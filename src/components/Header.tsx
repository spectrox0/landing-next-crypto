"use client";
import { FC, useState, useEffect, useMemo } from "react";
import { MainLogo } from "./logos/MainLogo";
import { SocialBtn, SocialIcons } from "./buttons/SocialBtn";
import { Container } from "./Container";
import { NavItems } from "./NavItems";
import { OutlinedBtn } from "./buttons/OutlinedBtn";
import { RocketIcon } from "./icons/RocketIcon";
import { Btn } from "./buttons/Btn";
import { HamburgerMenu } from "./HamburgerMenu";
import { TradeIcon } from "./icons/TradeIcon";
import { CurveHeader } from "./CurveHeader";

const arraySocialIcon = ["x", "discord", "book", "circle"];
export const Header: FC = () => {
  const [transparent, setTransparent] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => setTransparent(!window.scrollY);
    setTransparent(!window.scrollY);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const classNameNav = useMemo(
    () =>
      transparent
        ? "bg-transparent"
        : "bg-[rgba(34.86, 40.16, 47.81, 0.50)] backdrop-blur-[30px] border-neutral-600 supports-[backdrop-filter]:bg-neutral-900/50",
    [transparent]
  );
  return (
    <header className="flex items-center justify-between w-full sticky top-0 left-0 z-40 overflow-hidden">
      <nav
        className={
          "flex items-center justify-between  w-full  py-[41px] border-transparent border-b-[0.5]  transition-all duration-300 ease-in-out" +
          classNameNav
        }
      >
        <Container className="flex items-center justify-between gap-2 ">
          <MainLogo className="max-md:w-[141px] max-md:h-[31px] max-w-[50%]" />
          <div className="hidden items-center gap-3 max-xl:flex">
            <HamburgerMenu />
            <Btn className="py-[15px] px-[23px] h-[35px] text-sm">
              <TradeIcon /> Trade{" "}
            </Btn>
          </div>
          <div className="items-center gap-6 hidden xl:flex">
            <div className="flex items-center gap-6">
              <NavItems text="home" href="#home" />
              <NavItems text="whitepaper" href="#whitepaper" />
              <NavItems text="tokenomics" href="#tokenomics" />
            </div>
            {(arraySocialIcon as SocialIcons[]).map((item) => (
              <SocialBtn key={item} icon={item} />
            ))}
            <div className="flex gap-3">
              <OutlinedBtn>
                <RocketIcon />
                Launch Details
              </OutlinedBtn>
              <Btn>Trade now</Btn>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
