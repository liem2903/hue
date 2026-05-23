import { EmotionKey, EmotionScores, PlantType } from "@/types";

const GROWTH_CAP = 200;

export const EMOTION_TO_PLANT: Record<EmotionKey, PlantType> = {
  happy: "Sun Flower",
  sad: "Weeping Bell",
  angry: "Cactus Bloom",
  anxious: "Climbing Vine",
  neutral: "Succulent",
};

export function getDominantCandidates(emotions: EmotionScores): PlantType[] {
  const max = Math.max(...Object.values(emotions));
  return (Object.keys(emotions) as EmotionKey[])
    .filter((k) => emotions[k] === max)
    .map((k) => EMOTION_TO_PLANT[k]);
}

export function applyEmotionEntry(
  current: EmotionScores,
  incoming: EmotionScores,
  currentPoints: number,
): { newEmotions: EmotionScores; newPoints: number; didEvolve: boolean } {
  const gained = Object.values(incoming).reduce((sum, v) => sum + v, 0);
  const total = currentPoints + gained;
  const didEvolve = total >= GROWTH_CAP;
  const newPoints = didEvolve ? total - GROWTH_CAP : total;
  const newEmotions: EmotionScores = {
    happy: current.happy + incoming.happy,
    sad: current.sad + incoming.sad,
    angry: current.angry + incoming.angry,
    neutral: current.neutral + incoming.neutral,
    anxious: current.anxious + incoming.anxious,
  };
  return { newEmotions, newPoints, didEvolve };
}
