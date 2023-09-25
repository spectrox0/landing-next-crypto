import Image from "next/image";
import { FC } from "react";

export const Cubes: FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={"/assets/cubes/left_cube.png"}
        alt="Left Cube"
        width={105.74}
        height={113.65}
        className="absolute top-1/2 -translate-y-1/2 left-0"
      />
      <Image
        src={"/assets/cubes/right_cube.png"}
        alt="Right Cube"
        width={92.09}
        height={98.98}
        className="absolute top-1/2 -translate-y-1/2 right-0 "
      />
    </div>
  );
};
