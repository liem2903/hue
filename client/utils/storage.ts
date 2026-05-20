import AsyncStorage from "@react-native-async-storage/async-storage";
import { Plant } from "@/types";

const PLANT_KEY = "hue_plant";

export async function loadPlant(): Promise<Plant | null> {
  const raw = await AsyncStorage.getItem(PLANT_KEY);
  return raw ? (JSON.parse(raw) as Plant) : null;
}

export async function savePlant(plant: Plant): Promise<void> {
  await AsyncStorage.setItem(PLANT_KEY, JSON.stringify(plant));
}
