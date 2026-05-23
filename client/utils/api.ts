import axios from "axios";
import { EmotionScores } from "@/types";

const BASE_URL = "http://192.168.68.110:4000";

export async function parseEmotion(text: string): Promise<EmotionScores> {
  const response = await axios.post(`${BASE_URL}/api/claude/parse-emotion`, {
    prompt: text,
  });
  
  console.log(response);
  
  return response.data.data as EmotionScores;
}
