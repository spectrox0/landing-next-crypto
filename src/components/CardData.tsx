import { FC } from "react";
import { BarProgress } from "./BarProgress";
import { DarkBox } from "./DarkBox";
import { SecondaryText } from "./SecondaryText";

interface Props {
  progress: number;
  headerText: string;
  mainText: string;
  footerText: string;
}
export const CardData: FC<Props> = ({
  headerText,
  mainText,
  footerText,
  progress,
}) => {
  return (
    <DarkBox className="flex flex-col gap-1">
      <SecondaryText>{headerText}</SecondaryText>
      <p className="text-white text-[1.375em] font-light">{mainText}</p>
      <p className="opacity-40 text-white text-xs font-normal">{footerText}</p>
      <BarProgress size={2} progress={progress} />
    </DarkBox>
  );
};
