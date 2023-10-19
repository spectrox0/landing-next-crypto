import Image from "next/image";
import { FC } from "react";
import { Box } from "./Box";
import { CTABtn } from "./buttons/CTABtn";

interface Props {
  title?: string;
  textBtn?: string;
}
export const MiniBanner: FC<Props> = ({
  title = "Detailed Information",
  textBtn = "More Details",
}) => {
  return (
    <Box blur padding={2}>
      <div className="flex flex-wrap gap-2 max-md:flex-col-reverse">
        <Image
          alt="Ring"
          className="self-end 
        object-left-bottom rotate-[7.686deg] 
         -my-[15%] 
         -mx-[8%]
          origin-center 
          max-md:self-start max-md:max-w-full select-none max-md:-mt-[5%] max-w-[50%]
           object-contain bottom-0 left-0 h-auto w-[300.661px]"
          width={300.661}
          draggable={false}
          height={200.001}
          src="/assets/figures/figures.png"
        />
        <div className="flex flex-col gap-1 flex-1 justify-center">
          <h3 className="text-white text-[25px] font-medium px-2">{title}</h3>
          <CTABtn className="self-start mr-auto">{textBtn}</CTABtn>
        </div>
      </div>
    </Box>
  );
};
