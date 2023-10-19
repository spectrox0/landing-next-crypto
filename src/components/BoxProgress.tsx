import { FC } from "react";
import { BarProgress } from "./BarProgress";
import { Box } from "./Box";

export const BoxProgress: FC = () => {
  return (
    <Box className="flex flex-col gap-2" padding={2}>
      <h3 className="text-center text-white text-lg font-medium">Progress</h3>
      <BarProgress progress={50} label="0.00 / 0.00 ETH" />
      <p className="opacity-50 text-center text-white text-sm font-normal">
        33% Sold Out
      </p>
    </Box>
  );
};
