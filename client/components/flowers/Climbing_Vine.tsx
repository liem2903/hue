import Seed from "../svgs/Seed";
import ClimbingVineSeedling from "../svgs/ClimbingVine/Seedling";
import ClimbingVineDeveloping from "../svgs/ClimbingVine/Developing";
import ClimbingVineDeveloped from "../svgs/ClimbingVine/Developed";
import { Stages } from "../../types";

type Props = { stage: Stages; width?: number; height?: number };

export default function Climbing_Vine({ stage, width, height }: Props) {
  const svgs = {
    Seedling: <Seed width={width} height={height} />,
    Growing: <ClimbingVineSeedling width={width} height={height} />,
    Blooming: <ClimbingVineDeveloping width={width} height={height} />,
    Grown: <ClimbingVineDeveloped width={width} height={height} />,
  };
  return svgs[stage];
}
