import { useEffect, useState } from "react";
import {
  EmotionScores,
  EvolutionPending,
  Plant,
  PlantType,
  Stages,
} from "@/types";
import { getDominantCandidates } from "@/utils/emotions";
import { loadPlant, savePlant } from "@/utils/storage";

const NEXT_STAGE: Partial<Record<Stages, Stages>> = {
  Seed: "Seedling",
  Seedling: "Growing",
  Growing: "Blooming",
  Blooming: "Grown",
};

export function usePlant() {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [newPlantName, setNewPlantName] = useState("");
  const [currentPoints, setCurrentPoints] = useState(0);
  const [emotions, setEmotions] = useState<EmotionScores>({
    happy: 0,
    sad: 0,
    angry: 0,
    neutral: 0,
    anxious: 0,
  });
  const [evolutionPending, setEvolutionPending] =
    useState<EvolutionPending | null>(null);

  useEffect(() => {
    (async () => {
      const loaded = await loadPlant();
      if (!loaded) {
        setShowNamePrompt(true);
      } else {
        setPlant(loaded);
        setCurrentPoints(loaded.exp);
        setEmotions(loaded.emotions);
      }
      setIsLoading(false);
    })();
  }, []);

  const saveProgress = async (
    newEmotions: EmotionScores,
    newPoints: number,
    didEvolve: boolean,
  ) => {
    if (!plant) return;
    const updated = { ...plant, emotions: newEmotions, exp: newPoints };
    await savePlant(updated);
    setPlant(updated);
    if (didEvolve && plant.stage !== "Grown") {
      const candidates = getDominantCandidates(newEmotions);
      const nextStage = NEXT_STAGE[plant.stage];
      if (nextStage) setEvolutionPending({ newStage: nextStage, candidates });
    }
  };

  const confirmEvolution = async (chosenType: PlantType) => {
    if (!plant || !evolutionPending) return;
    const evolved: Plant = {
      ...plant,
      stage: evolutionPending.newStage,
      plantType: chosenType,
      exp: currentPoints,
      emotions,
    };
    await savePlant(evolved);
    setPlant(evolved);
    setEvolutionPending(null);
  };

  const createPlant = async () => {
    const trimmed = newPlantName.trim();
    if (!trimmed) return;
    const newPlant: Plant = {
      name: trimmed,
      exp: 0,
      stage: "Seed",
      plantType: "Sun Flower",
      emotions: { happy: 0, sad: 0, angry: 0, neutral: 0, anxious: 0 },
    };
    try {
      await savePlant(newPlant);
      setPlant(newPlant);
      setShowNamePrompt(false);
    } catch (error) {
      console.error("Failed to save plant:", error);
    }
  };

  return {
    plant,
    setPlant,
    isLoading,
    showNamePrompt,
    newPlantName,
    setNewPlantName,
    currentPoints,
    setCurrentPoints,
    emotions,
    setEmotions,
    saveProgress,
    createPlant,
    evolutionPending,
    confirmEvolution,
  };
}
