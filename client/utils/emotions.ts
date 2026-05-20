import { EmotionScores } from "@/types";

const GROWTH_CAP = 200;

export function applyEmotionEntry(
  current: EmotionScores,
  incoming: EmotionScores,
  currentPoints: number,
): { newEmotions: EmotionScores; newPoints: number } {
  const gained = Object.values(incoming).reduce((sum, v) => sum + v, 0);
  const newPoints = Math.min(currentPoints + gained, GROWTH_CAP);
  const newEmotions: EmotionScores = {
    happy: current.happy + incoming.happy,
    sad: current.sad + incoming.sad,
    angry: current.angry + incoming.angry,
    neutral: current.neutral + incoming.neutral,
    anxious: current.anxious + incoming.anxious,
  };
  return { newEmotions, newPoints };
}
