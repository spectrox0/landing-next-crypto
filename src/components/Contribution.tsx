import { CRYPTO } from "@/utils/crypto";
import { FC } from "react";
import { Box } from "./Box";
import { CryptoContribuiteCard } from "./CriptoContribuiteCard";
import { OutlinedBtn } from "./buttons/OutlinedBtn";

export const ContributionBox: FC = () => {
  return (
    <Box className="flex flex-col gap-4" padding={2}>
      <h2 className="text-white text-lg font-medium ">Your Contribution</h2>
      <CryptoContribuiteCard
        title="Contribute"
        value="0.00"
        token={CRYPTO.ETH}
      />
      <CryptoContribuiteCard
        token={CRYPTO.xINTX}
        title="You’ll get"
        value="0.00"
      />
      <OutlinedBtn className="justify-center">Connect Wallet</OutlinedBtn>
    </Box>
  );
};
