import Seed from "../svgs/Seed";
import WeepingBellSeedling from "../svgs/WeepingBell/Seedling";
import WeepingBellDeveloping from "../svgs/WeepingBell/Developing";
import WeepingBellDeveloped from "../svgs/WeepingBell/Developed";
import { Stages } from "../../types";

type Props = { stage: Stages; width?: number; height?: number };

export default function Weeping_Bell({ stage, width, height }: Props) {
  const svgs = {
    Seedling: <Seed width={width} height={height} />,
    Growing: <WeepingBellSeedling width={width} height={height} />,
    Blooming: <WeepingBellDeveloping width={width} height={height} />,
    Grown: <WeepingBellDeveloped width={width} height={height} />,
  };
  return svgs[stage];
}
