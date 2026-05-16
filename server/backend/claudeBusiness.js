

export const askBusiness = (prompt) => {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const SYSTEM_PROMPT = `You are an emotion analyser. Given a piece of text, rate the following emotions of how the user is feeling on a scale of 1-5 with decimals allowed. Return ONLY a JSON object with no explanation, no markdown, no backticks. Just raw JSON like this: {"happy": 4, "sad": 2, "angry": 1, "neutral": 3, "anxious": 1}`;
    const response = await client.message.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: message }],
    });

    return response.content[0].text;
} 