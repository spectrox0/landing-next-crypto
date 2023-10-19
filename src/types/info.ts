import type { ReactNode } from "react";

export interface DataInfo {
  primaryText: string;
  info: string | ReactNode;
  gradient?: boolean;
  secondaryText: string;
}
