"use client";
import { Container } from "@/components/Container";
import { Waves } from "@/components/Waves";
import { PhaseCard } from "@/components/cards/PhaseCard";
import { Arrow } from "@/components/icons/Arrow";
import { phases } from "@/utils/data";
import { FC, useState } from "react";

export const HeroSection: FC = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <section className=" w-full flex items-center justify-center overflow-hidden">
      <Waves />
      <div className="w-full overflow-hidden">
        <Container className="flex relative z-10">
          <div
            className={
              "flex-shrink-0 overflow-hidden grid grid-cols-3 gap-10 place-content-center place-items-center mx-auto max-w-[1393px] transition-transform duration-300 transform " +
              (index === 0
                ? "max-xl:translate-x-0"
                : index === 1
                ? "max-xl:-translate-x-1/3"
                : index === 2
                ? "max-xl:-translate-x-2/3"
                : "")
            }
          >
            {phases.map((phase, index) => (
              <PhaseCard {...phase} key={phase.number} />
            ))}
          </div>
          {/*        Arrow buttons to carrousel, sliders */}
        </Container>

        <button
          disabled={phases.length === index + 1}
          onClick={handleNext}
          className={
            "flex z-10 xl:hidden absolute top-1/2 right-0 transform -translate-y-1/2  rounded-tl-xl rounded-bl-xl outline-none  border-none focus:outline-none py-2 px-1  items-center justify-center transition-all duration-300 " +
            (phases.length === index + 1
              ? "opacity-50 bg-bg-1 cursor-not-allowed"
              : "bg-linear-gradient-1 cursor-pointer")
          }
        >
          <Arrow className="rotate-180" />
        </button>
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className={
            "flex z-10 xl:hidden absolute top-1/2 left-0 transform -translate-y-1/2  rounded-tr-xl rounded-br-xl outline-none  border-none focus:outline-none py-2 px-1 items-center justify-center transition-all duration-300 " +
            (index === 0
              ? "opacity-50 bg-bg-1 cursor-not-allowed"
              : "bg-linear-gradient-1 cursor-pointer")
          }
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
};
