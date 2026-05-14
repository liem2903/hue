export type Emotion = "Happy" | "Sad" | "Angry" | "Anxious" | "Neutral";
export type PlantType = "Cactus Bloom" | "Succulent" | "Sun Flower" | "Climbing Vine" | "Weeping Bell";
export type Stages = "Seedling" | "Growing" | "Blooming" | "Grown";

export type Plant = {
    name: string 
    emotions: EmotionScore 
    plantType: PlantType
}

export type EmotionScore = {
    happiness: number
    sadness: number
    anger: number
    anxiety: number
    neutral: number
}