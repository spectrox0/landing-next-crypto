import React from "react";
import { formatDate } from "./date";
import { OutlinedBtn } from "@/components/buttons/OutlinedBtn";
import { BtnProps } from "@/types/button";

export const Status = {
  comingSoon: { title: "Coming Soon" },
  onGoing: { title: "On Going" },
  toBeAnnounced: { title: "To Be Announced" },
} as const;
export interface Phase {
  title: string;
  description: string;
  number: string;
  status: keyof typeof Status;
  statusDescription?: string;
  btnProps?: Omit<BtnProps, "children">;
  btnText?: string;
}
export const phases: Phase[] = [
  {
    title: "Open Beta",
    description: `Participate in the Open Beta to experience intent based trading and secure your share of xINTX rewards.\n\nxINTX will be retroactively airdropped to traders in the Open Beta once emissions start in Phase 3\n\nUsers can also participate in various campaigns on Zealy to earn a share in the airdrop pool.\n\nUsers qualify for rewards until the start of Phase 3: Full Launch.`,
    number: "01",
    status: "onGoing",
    btnText: "Learn More",
  },
  {
    title: "Token Generation Event",
    description: `Participate in the Token Generation Event (TGE) for $xINTX.\n\nThe TGE is a first come first serve hard capped process designed to be a fair and transparent to all participants.\n\nUsers can contribute ETH in return for the xINTX token. xINTX will be 50% liquid and claimable 1 week after TGE, and 50% will be vested over 12 months.`,
    status: "comingSoon",
    statusDescription: formatDate("2023-10-12"),
    number: "02",
    btnText: "Learn More",
  },
  {
    title: "Full Launch",
    number: "03",
    description: `Our full mainnet launch of IntentX will happen in Q1 2024. this will come with many new features and kick off xINTX trader incentives.\n\nRetroactive airdrop claims will be available at this time.`,
    status: "toBeAnnounced",
    btnProps: {
      disabled: true,
    },
  },
];
