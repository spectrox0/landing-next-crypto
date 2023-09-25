"use client";
import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { Cubes } from "@/components/Cubes";
import { Curves } from "@/components/Curves";
import { WaveRed, Waves } from "@/components/Waves";
import { OutlinedBtn } from "@/components/buttons/OutlinedBtn";
import { ChartIcon } from "@/components/icons/Chart";
import { ChatIcon } from "@/components/icons/Chat";
import { ZeadlyIcon } from "@/components/icons/Zeadly";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: ZeadlyIcon,
    title: "Zealy Campaign",
    description:
      "Join us on Zealy.io and complete the available campaigns to earn $XINTX airdrop.",
    btnText: "Coming Soon",
    disabled: true,
    btnFunc: () => {},
  },
  {
    icon: ChatIcon,
    title: "Join Our Community",
    description:
      "Join our discord and let us know how your experience is going! Open a ticket if you have any specific issues or requests.",
    btnText: "Join Discord",
    btnFunc: () => {},
  },
];
export const FeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <section className="relative w-full min-h-[1000px]" ref={ref}>
      <Waves />
      <WaveRed />
      <Curves />
      <Cubes />

      <Container className={"relative z-10 "}>
        <div className={"grid grid-cols-2 gap-5 max-lg:grid-cols-1"}>
          <Box className="overflow-hidden col-span-1 row-start-1 row-span-2  flex flex-col gap-2">
            <div className="-mx-[46px] -mt-[41px] relative overflow-hidden">
              <Image
                src="/assets/sample_app.png"
                objectFit="cover"
                className="object-cover object-top  w-full h-[350px] "
                objectPosition="top center"
                width={829}
                height={350}
                alt="."
              />
              <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-backdrop" />
            </div>
            <div className="flex flex-col gap-4 -mt-[41px] relative ">
              <ChartIcon />
              <h3 className="font-medium text-xl">Trade on IntentX</h3>
              <p className="text-white font-normal text-sm">
                Trade on any of our supported markets to earn xINTX airdrops.
                <br /> The airdrop is proportional and based on total traded
                volume during the Open Beta period.
              </p>
              <OutlinedBtn className="self-start mt-auto" disabled>
                Coming Soon
              </OutlinedBtn>
            </div>
          </Box>

          {features.map(
            ({
              title,
              icon: Icon,
              btnFunc,
              btnText,
              description,
              disabled,
            }) => (
              <Box key={title} className="flex flex-col gap-2 justify-center">
                <Icon />
                <h3 className="font-medium text-xl">{title}</h3>
                <div className="flex gap-2 justify-between flex-wrap">
                  <p className="text-white font-normal text-sm max-w-[373px]">
                    {description}
                  </p>
                  <OutlinedBtn
                    disabled={disabled}
                    className="self-end ml-auto"
                    onClick={btnFunc}
                  >
                    {btnText}
                  </OutlinedBtn>
                </div>
              </Box>
            )
          )}
        </div>
      </Container>
    </section>
  );
};
