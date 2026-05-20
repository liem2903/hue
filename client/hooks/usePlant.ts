import { useEffect, useState } from "react";
import { EmotionScores, Plant } from "@/types";
import { loadPlant, savePlant } from "@/utils/storage";

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
  ) => {
    if (!plant) return;
    const updated = { ...plant, emotions: newEmotions, exp: newPoints };
    await savePlant(updated);
    setPlant(updated);
  };

  const createPlant = async () => {
    const trimmed = newPlantName.trim();
    if (!trimmed) return;
    const newPlant: Plant = {
      name: trimmed,
      exp: 0,
      stage: "Seedling",
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
  };
}
