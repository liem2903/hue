export type Emotion = "Happy" | "Sad" | "Angry" | "Anxious" | "Neutral";
export type PlantType =
  | "Cactus Bloom"
  | "Succulent"
  | "Sun Flower"
  | "Climbing Vine"
  | "Weeping Bell";
export type Stages = "Seedling" | "Growing" | "Blooming" | "Grown";

export type Plant = {
  name: string;
  exp: number;
  stage: Stages;
  plantType: PlantType;
  emotions: EmotionScores;
};

export type EmotionScores = {
  happy: number;
  sad: number;
  angry: number;
  neutral: number;
  anxious: number;
};
