import AsyncStorage from "@react-native-async-storage/async-storage";
import { Plant } from "@/types";

const PLANT_KEY = "hue_plant";

const defaultPlant: Plant = {
  name: "Mochi",
  exp: 0,
  stage: "Seedling",
  plantType: "Weeping Bell",
  emotions: {
    happy: 0,
    sad: 0,
    angry: 0,
    neutral: 0,
    anxious: 0,
  },
};

export async function loadPlant(): Promise<Plant> {
  const raw = await AsyncStorage.getItem(PLANT_KEY);
  return raw ? (JSON.parse(raw) as Plant) : defaultPlant;
}
