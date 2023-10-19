import { BoxProgress } from "@/components/BoxProgress";
import { Container } from "@/components/Container";
import { ContributionBox } from "@/components/Contribution";
import { InfoBar } from "@/components/InfoBar";
import { MiniBanner } from "@/components/MiniBanner";
import { ResumeData } from "@/components/ResumeData";
import { SwapIcon } from "@/components/icons/SwapIcon";
import { Banner } from "@/sections/banner";
import { DataInfo } from "@/types/info";

const infoData: DataInfo[] = [
  {
    primaryText: "Current TGE Stage",
    info: "Private",
    secondaryText: "Next Stage: Public",
    gradient: true,
  },
  {
    primaryText: "Funds Raised",
    info: "0.00 / 0.00 ETH",
    secondaryText: "Raised / Hardcap",
  },
  {
    primaryText: "Your Contribution",
    info: "0.00 ETH",
    secondaryText: "Contributed by You",
  },
  {
    primaryText: "Price",
    info: (
      <>
        0.00 ETH <SwapIcon /> 0.00 xINTX
      </>
    ),
    secondaryText: "$0.00 per INTX",
  },
  {
    primaryText: "Circulating Market Cap",
    info: "$0,000,000",
    secondaryText: "0.00M Circulating Supply",
  },
  {
    primaryText: "Fully Diluted Valuation",
    info: "$0,000,000",
    secondaryText: "100M Total Supply",
  },
];
export default function TGE() {
  return (
    <>
      <Banner title={"xINTX Token Generation Event"} number="02" img="Ring">
        The TGE is a first come first serve hard capped process designed to be a
        fair and transparent to all participants. Users can contribute ETH in
        return for the xINTX token. xINTX will be 50% liquid and claimable 1
        week after TGE, and 50% will be vested over 12 months.
      </Banner>
      <InfoBar data={infoData} />
      <Container>
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 overflow-hidden  pb-16">
          <ResumeData />
          <ContributionBox />
          <BoxProgress />
          <MiniBanner />
        </div>
      </Container>
    </>
  );
}
