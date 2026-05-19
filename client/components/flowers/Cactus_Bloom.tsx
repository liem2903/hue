import Seed from "../svgs/Seed";
import CactusBloomSeedling from "../svgs/CactusBloom/Seedling";
import CactusBloomDeveloping from "../svgs/CactusBloom/Developing";
import CactusBloomDeveloped from "../svgs/CactusBloom/Developed";
import { Stages } from "../../types";

type Props = { stage: Stages; width?: number; height?: number };

export default function Cactus_Bloom({ stage, width, height }: Props) {
  const svgs = {
    Seedling: <Seed width={width} height={height} />,
    Growing: <CactusBloomSeedling width={width} height={height} />,
    Blooming: <CactusBloomDeveloping width={width} height={height} />,
    Grown: <CactusBloomDeveloped width={width} height={height} />,
  };
  return svgs[stage];
}
