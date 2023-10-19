import { EthereumIcon } from "@/components/icons/EthereumIcon";
import { INTXIcon } from "@/components/icons/INTxIcon";

export enum CRYPTO {
  "ETH" = "ETH",
  "xINTX" = "xINTX",
}

export const CryptoIcon = {
  [CRYPTO.ETH]: EthereumIcon,
  [CRYPTO.xINTX]: INTXIcon,
};
