import { Container } from "@/components/Container";
import { TitlePhase } from "@/components/TitlePhase";
import { CTABtn } from "@/components/buttons/CTABtn";
import Image from "next/image";
import { FC, useMemo } from "react";

const image = {
  Cube: () => (
    <Image
      alt="Cube"
      className="object-left-bottom select-none max-md:self-start self-end max-md:-mt-[30%] -mt-[241px] -mr-[50px] -translate-x-[19.56%] translate-y-[24.67%] max-w-[70%]  max-md:max-w-full object-contain bottom-0 left-0 rounded-tl-[20px] w-[800px] h-full"
      width={500}
      draggable={false}
      height={450}
      src="/assets/cube.png"
    />
  ),
  Ring: () => (
    <Image
      alt="Ring"
      className="self-end object-left-bottom  max-md:self-start max-md:max-w-full select-none max-md:-mt-[20%] -translate-x-[30.56%] -mr-[150px]  -mt-[80%] max-w-[50%] object-contain bottom-0 left-0 rounded-tl-[20px] h-auto w-[800px]"
      width={800}
      draggable={false}
      height={720}
      src="/assets/ring/ringred.png"
    />
  ),
};
interface Props {
  title: string;
  number: string;
  img: keyof typeof image;
  children: React.ReactNode;
}
export const Banner: FC<Props> = ({
  number = "01",
  title = "Open Beta",
  img = "Cube",
  children,
}) => {
  const HeaderImage = useMemo(() => image[img], [img]);
  return (
    <Container className="relative z-10">
      <div className="relative overflow-hidden pt-[120px] h-full mb-10 rounded-[15px] flex flex-col">
        <div className="bg-box w-full overflow-visible rounded-[inherit] h-full flex-1 flex gap-2 max-md:flex-col-reverse">
          <HeaderImage />
          <div className="pb-[40px] pt-[30px] pl-[10px] pr-[45px] max-md:pl-[45px] flex flex-col gap-4">
            <CTABtn className="self-end">More Details</CTABtn>
            <TitlePhase title={title} number={number} />
            <p className="text-white text-base font-normal ">{children}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
