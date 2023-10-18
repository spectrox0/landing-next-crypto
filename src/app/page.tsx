import { HeroSection } from "@/sections/hero";
import { Header } from "@/components/Header";
import { Banner } from "@/sections/banner";
import { FeaturesSection } from "@/sections/features";
import { AlertSection } from "@/sections/alert";
import { HandsSection } from "@/sections/hands";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner title={"Open Beta"} number="01" img="Cube">
        <b className="font-semibold">
          Copy Up to 1,500,000 xINTX tokens (1.5%) will be distributed as
          rewards to participants in the Open Beta project phase.
        </b>
        Trade on the exchange and complete tasks on Zealy to earn a share of
        airdrop rewards.
      </Banner>
      <FeaturesSection />
      <AlertSection />
      <HandsSection />
    </>
  );
}
