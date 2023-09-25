import { Icon } from "@/types/common";
import Image from "next/image";

export const AppIcon: Icon = () => {
  return (
    <Image
      src="/assets/logo/app.svg"
      width={24}
      height={24}
      objectFit="contain"
      objectPosition="center"
      draggable={false}
      alt="IntentX"
    />
  );
};
