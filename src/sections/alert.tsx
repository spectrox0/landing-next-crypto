import { Box } from "@/components/Box";
import { Container } from "@/components/Container";
import { Waves } from "@/components/Waves";
import { AlertIcon } from "@/components/icons/AlertIcon";
import Image from "next/image";
import { FC } from "react";

export const AlertSection: FC = () => {
  return (
    <section className="w-full relative">
      <Container className="relative z-10">
        <div className="max-w-[1001px] mx-auto w-full">
          <div className="flex gap-2 overflow-hidden bg-box rounded-[15px]">
            <div className="bg-linear-gradient-1 inline-flex rounded-[inherit] items-center justify-center p-[17px]">
              <AlertIcon />
            </div>
            <div className="py-6 px-5">
              <p className="text-white text-sm font-normal ">
                All Open Beta tasks & campaigns must be completed prior the
                start of Phase 3 (Full Launch) in order to qualify for airdrops.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
