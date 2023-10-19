import { FC } from "react";
import { Box } from "./Box";
import { CardData } from "./CardData";
import { DarkBox } from "./DarkBox";
import { SecondaryText } from "./SecondaryText";
import { LoadingSpinner } from "./SpinnerLoading";
import { Timer } from "./Timer";

interface Data {
  progress: number;
  headerText: string;
  mainText: string;
  footerText: string;
}
const defaultData: Data[] = [
  {
    progress: 10,
    headerText: "Start Date",
    mainText: "00/00/00",
    footerText: "Month, Day",
  },

  {
    progress: 20,
    headerText: "End Date",
    mainText: "00/00/00",
    footerText: "Month, Day",
  },

  {
    progress: 10,
    headerText: "Hard Cap",
    mainText: "0.00 ETH",
    footerText: "$0,000,000.00",
  },

  {
    progress: 10,
    headerText: "Price",
    mainText: "0.000 ETH ",
    footerText: "$0.00 per xINTX",
  },

  {
    progress: 10,
    headerText: "Minimum Purchase",
    mainText: "0.2 ETH",
    footerText: "$348,58",
  },

  {
    progress: 10,
    headerText: "Terms",
    mainText: "50% xINTX Liquid",
    footerText: "50% Vested over 12 Months",
  },
] as const;
interface Props {
  data?: Data[];
}
export const ResumeData: FC<Props> = ({ data = defaultData }) => {
  return (
    <Box className="flex flex-col gap-4" padding={2}>
      <DarkBox padding={2} className="flex justify-between gap-2 flex-wrap">
        <div className="flex gap-2 items-center">
          <LoadingSpinner color="red" size={75} />
          <div className="flex flex-col gap-1">
            <SecondaryText>Event is</SecondaryText>
            <p className="text-white text-[1.562em] font-medium">On Going</p>
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <Timer secs={"00"} days={"00"} hours={"00"} minutes={"00"} />
        </div>
      </DarkBox>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.map((item, index) => (
          <CardData key={index} {...item} />
        ))}
      </div>
    </Box>
  );
};
