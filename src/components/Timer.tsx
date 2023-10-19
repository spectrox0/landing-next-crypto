import { FC } from "react";
import { SecondaryText } from "./SecondaryText";

interface Props {
  secs: string;
  minutes: string;
  hours: string;
  days: string;
}

export const Digit = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col px-3 justify-center items-center text-center">
      <p className="text-white text-[1.562em] font-light flex flex-col text-center mx-auto">
        {value}
      </p>
      <SecondaryText className="capitalize mx-auto text-center">
        {label}
      </SecondaryText>
    </div>
  );
};
export const Timer: FC<Props> = ({ secs, minutes, hours, days }) => {
  return (
    <div className="flex flex-col gap-1">
      <SecondaryText className="px-3">Remaining Time</SecondaryText>
      <div className="flex flex-wrap divide-x divider-divider">
        <Digit value={days} label="days" />
        <Digit value={hours} label="Hours" />
        <Digit value={minutes} label="Mins" />
        <Digit value={secs} label="Secs" />
      </div>
    </div>
  );
};
