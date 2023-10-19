import { DataInfo } from "@/types/info";
import { FC } from "react";
import { Container } from "./Container";
import { InfoItem } from "./InfoItem";

interface Props {
  data: DataInfo[];
}
export const InfoBar: FC<Props> = ({ data }) => {
  return (
    <Container className="flex justify-center items-center flex-wrap">
      <article className="bg-box rounded-[15px] self-center mx-auto items-center flex flex-wrap justify-center h-full max-md:divide-x-0 max-md:divide-y gap-1  divide-x divide-divider max-md:flex-col  px-[15px] py-[20px]">
        {data.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </article>
    </Container>
  );
};
