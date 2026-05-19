import Seed from "../svgs/Seed";
import SucculentSeedling from "../svgs/Succulent/Seedling";
import SucculentDeveloping from "../svgs/Succulent/Developing";
import SucculentDeveloped from "../svgs/Succulent/Developed";
import { Stages } from "../../types";

type Props = { stage: Stages; width?: number; height?: number };

export default function Succulent({ stage, width, height }: Props) {
  const svgs = {
    Seedling: <Seed width={width} height={height} />,
    Growing: <SucculentSeedling width={width} height={height} />,
    Blooming: <SucculentDeveloping width={width} height={height} />,
    Grown: <SucculentDeveloped width={width} height={height} />,
  };
  return svgs[stage];
}
