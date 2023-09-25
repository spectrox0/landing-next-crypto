"use client";
import { FC } from "react";
import { MainLogo } from "./logos/MainLogo";
import { Container } from "./Container";
import { AppIcon } from "./icons/AppIcon";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CTABtn } from "./buttons/CTABtn";
import { HeadPhoneIcon } from "./icons/Headphone";
import { FooterBtn } from "./buttons/FooterBtn";
import {
  BookIcon,
  BookIconImage,
  CircleIcon,
  CircleIconImage,
  DiscordIcon,
  DiscordIconImage,
  XIcon,
  XIconImage,
} from "./icons";
import { ChickenIcon } from "./icons/Chicken";
import { GeckoIcon } from "./icons/GeckIcon";
import { TelegramIcon } from "./icons/TelegramIcon";
const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const Footer: FC = () => {
  return (
    <footer className="flex gap-2 w-full py-11 bg-gradient-app mt-auto">
      <Container className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between flex-wrap">
          <div className="flex flex-col gap-2">
            <MainLogo />
            <p className="text-white text-sm text-[13px] font-normal">
              {`© IntentX, ${new Date().getFullYear()}. All rights reserved.`}
            </p>
            <div className="flex gap-2 text-slate-300 text-sm text-[13px]">
              <a
                className="cursor-pointer hover:text-white"
                href="https://twitter.com/intentx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy and Policies
              </a>{" "}
              |{/*  legal */}
              <a
                className="cursor-pointer hover:text-white"
                href="https://twitter.com/intentx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Legal
              </a>
              |{/*  Terms of Service */}
              <a
                className="cursor-pointer hover:text-white"
                href="https://twitter.com/intentx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex gap-14 flex-wrap ml-auto self-end">
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl font-medium">Documentation</h4>
              <ul className="flex flex-col">
                <li className="text-slate-300 text-sm font-normal  leading-[30px]">
                  Whitepaper
                </li>
                <li className="text-slate-300 text-sm font-normal  leading-[30px]">
                  Tokenomics
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-xl font-medium">About</h4>
              <ul className="flex flex-col">
                <li className="text-slate-300 text-sm font-normal  leading-[30px]">
                  <a
                    className="cursor-pointer hover:text-white"
                    href="https://twitter.com/intentx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>
                </li>
                <li className="text-slate-300 text-sm font-normal  leading-[30px]">
                  <a
                    className="cursor-pointer hover:text-white"
                    href="https://twitter.com/intentx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li className="text-slate-300 text-sm font-normal  leading-[30px]">
                  <a
                    className="cursor-pointer hover:text-white"
                    href="https://twitter.com/intentx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gitbook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-2">
          <div
            className={
              plusJakarta.className + " flex flex-wrap gap-1 items-center"
            }
          >
            <AppIcon />
            <p className={" text-slate-300 text-xs text-[11px] font-normal"}>
              Where Intent Meets Execution
            </p>
            {/* divider */}
            <div className="h-full w-[2px] bg-slate-300 opacity-50 mx-3"></div>
            <div className="flex items-center gap-1">
              <div className="h-[7px] w-[7px] rounded-full bg-emerald-400"></div>
              <p className="text-white leading-none text-xs font-medium">
                Coming Soon
              </p>
            </div>

            <CTABtn
              className="flex items-center gap-1 text-xs"
              icon={HeadPhoneIcon}
            >
              Help and Support
            </CTABtn>
          </div>
          <div className="flex flex-wrap gap-5 items-center ml-auto justify-end">
            <FooterBtn
              icon={ChickenIcon}
              iconSize={{ width: 12.5, height: 15 }}
            />
            <FooterBtn
              icon={XIconImage}
              iconSize={{ width: 15, height: 13.58 }}
            />
            <FooterBtn icon={GeckoIcon} />
            <FooterBtn
              icon={DiscordIconImage}
              iconSize={{ width: 15, height: 11 }}
            />

            <FooterBtn
              icon={TelegramIcon}
              iconSize={{ width: 15, height: 13.64 }}
            />
            <FooterBtn
              icon={BookIconImage}
              iconSize={{ width: 15, height: 10.81 }}
            />
            <FooterBtn
              icon={CircleIconImage}
              iconSize={{ width: 15, height: 8.48 }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};
