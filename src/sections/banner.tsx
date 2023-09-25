import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { TitlePhase } from "@/components/TitlePhase";
import { CTABtn } from "@/components/buttons/CTABtn";
import Image from "next/image";
import { FC } from "react";

export const Banner: FC = () => {
  return (
    <Container className="relative z-10">
      <div className="relative overflow-hidden pt-[120px] h-full mb-10 rounded-[15px] flex flex-col">
        <div className="bg-box w-full overflow-visible rounded-[inherit] h-full flex-1 flex gap-2">
          <Image
            alt="/"
            className="select-none -mt-[241px] -mr-[100px] -translate-x-1/4 translate-y-1/4 max-w-full object-contain bottom-0 left-0 rounded-tl-[20px]"
            width={362}
            draggable={false}
            height={339}
            src="/assets/cube.png"
          />
          <div className="pb-[40px] pt-[30px] pl-[10px] pr-[45px] flex flex-col gap-4">
            <CTABtn className="self-end">More Details</CTABtn>
            <TitlePhase title={"Open Beta"} number={"01"} />
            <p className="text-white text-base font-normal ">
              <b className="font-semibold">
                Copy Up to 1,500,000 xINTX tokens (1.5%) will be distributed as
                rewards to participants in the Open Beta project phase.
              </b>
              Trade on the exchange and complete tasks on Zealy to earn a share
              of airdrop rewards.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
