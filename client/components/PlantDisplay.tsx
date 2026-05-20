import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { PlantType, Stages } from "@/types";
import CactusBloomSeedling from "./svgs/CactusBloom/Seedling";
import CactusBloomDeveloping from "./svgs/CactusBloom/Developing";
import CactusBloomDeveloped from "./svgs/CactusBloom/Developed";
import SucculentSeedling from "./svgs/Succulent/Seedling";
import SucculentDeveloping from "./svgs/Succulent/Developing";
import SucculentDeveloped from "./svgs/Succulent/Developed";
import SunFlowerSeedling from "./svgs/SunFlower/Seedling";
import SunFlowerDeveloping from "./svgs/SunFlower/Developing";
import SunFlowerDeveloped from "./svgs/SunFlower/Developed";
import ClimbingVineSeedling from "./svgs/ClimbingVine/Seedling";
import ClimbingVineDeveloping from "./svgs/ClimbingVine/Developing";
import ClimbingVineDeveloped from "./svgs/ClimbingVine/Developed";
import WeepingBellSeedling from "./svgs/WeepingBell/Seedling";
import WeepingBellDeveloping from "./svgs/WeepingBell/Developing";
import WeepingBellDeveloped from "./svgs/WeepingBell/Developed";
type SvgStage = "Seedling" | "Developing" | "Developed";

const PLANT_COMPONENTS: Record<
  PlantType,
  Record<SvgStage, React.ComponentType<{ width?: number; height?: number }>>
> = {
  "Cactus Bloom": {
    Seedling: CactusBloomSeedling,
    Developing: CactusBloomDeveloping,
    Developed: CactusBloomDeveloped,
  },
  Succulent: {
    Seedling: SucculentSeedling,
    Developing: SucculentDeveloping,
    Developed: SucculentDeveloped,
  },
  "Sun Flower": {
    Seedling: SunFlowerSeedling,
    Developing: SunFlowerDeveloping,
    Developed: SunFlowerDeveloped,
  },
  "Climbing Vine": {
    Seedling: ClimbingVineSeedling,
    Developing: ClimbingVineDeveloping,
    Developed: ClimbingVineDeveloped,
  },
  "Weeping Bell": {
    Seedling: WeepingBellSeedling,
    Developing: WeepingBellDeveloping,
    Developed: WeepingBellDeveloped,
  },
};

function toSvgStage(stage: Stages): SvgStage {
  if (stage === "Seedling") return "Seedling";
  if (stage === "Grown") return "Developed";
  return "Developing";
}

type Props = {
  plantType: PlantType | null;
  stage: Stages | null;
  width: number;
  height: number;
};

function GrowingOrb({ width, height }: { width: number; height: number }) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.4,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: 220,
          height: 220,
          borderRadius: 110,
          backgroundColor: "rgba(168,224,112,0.04)",
          transform: [{ scale: pulse }],
        }}
      />
      <Animated.View
        style={{
          position: "absolute",
          width: 140,
          height: 140,
          borderRadius: 70,
          backgroundColor: "rgba(168,224,112,0.08)",
          transform: [{ scale: pulse }],
        }}
      />
      <View
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "rgba(168,224,112,0.14)",
        }}
      />
    </View>
  );
}

export default function PlantDisplay({
  plantType,
  stage,
  width,
  height,
}: Props) {
  if (!plantType || !stage) {
    return <GrowingOrb width={width} height={height} />;
  }
  const Component = PLANT_COMPONENTS[plantType][toSvgStage(stage)];
  return <Component width={width} height={height} />;
}
