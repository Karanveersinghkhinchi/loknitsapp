
import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API functionality will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateGiftMessage = async (product: Product, occasion: string): Promise<string> => {
  if (!API_KEY) {
    return "AI features are currently unavailable. Please try again later.";
  }
  
  try {
    const prompt = `Write a short, heartfelt, and minimalist gift message for a recipient receiving a "${product.name}". The occasion is "${occasion}". The brand's tone is serene and focuses on creating "forever gifts for forever bonds." Keep the message under 40 words.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating gift message with Gemini API:", error);
    return "We had trouble writing a message for you. Please try writing your own.";
  }
};
