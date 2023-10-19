import { CRYPTO, CryptoIcon } from "@/utils/crypto";
import { FC, useMemo } from "react";
import { DarkBox } from "./DarkBox";

interface Props {
  title: string;
  value: string;
  token: CRYPTO;
}
export const CryptoContribuiteCard: FC<Props> = ({ title, value, token }) => {
  const Icon = useMemo(() => CryptoIcon[token], [token]);
  return (
    <DarkBox padding={2} className="flex flex-wrap gap-1 justify-between ">
      <div className="flex flex-col">
        <p className="text-white text-base font-normal">{title}</p>
        <p className="opacity-50 text-white text-[25px] font-light ">{value}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Icon />
        <p className="uppercase text-white text-base font-normal">{token}</p>
      </div>
    </DarkBox>
  );
};
