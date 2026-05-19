import Seed from "../svgs/Seed";
import SunFlowerSeedling from "../svgs/SunFlower/Seedling";
import SunFlowerDeveloping from "../svgs/SunFlower/Developing";
import SunFlowerDeveloped from "../svgs/SunFlower/Developed";
import { Stages } from "../../types";

type Props = { stage: Stages; width?: number; height?: number };

export default function Sun_Flower({ stage, width, height }: Props) {
  const svgs = {
    Seedling: <Seed width={width} height={height} />,
    Growing: <SunFlowerSeedling width={width} height={height} />,
    Blooming: <SunFlowerDeveloping width={width} height={height} />,
    Grown: <SunFlowerDeveloped width={width} height={height} />,
  };
  return svgs[stage];
}
