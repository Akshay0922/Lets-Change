import express from "express";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import { authMiddleware } from "../middleware/authMiddleware.js";

dotenv.config();
const router = express.Router();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/summarize", authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are an assistant that summarizes blogs into 3-4 clear lines."
        },
        { role: "user", content }
      ],
      max_tokens: 120,
    });

    const summary = response.choices[0]?.message?.content?.trim();
    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Failed to summarize blog with Groq" });
  }
});

router.post("/recommend", authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant that recommends 3-4 similar blogs or success stories based on the given text."
        },
        { role: "user", content }
      ],
      max_tokens: 200,
    });

    const recommendations = response.choices[0]?.message?.content?.trim();
    res.json({ recommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Failed to fetch recommendations" });
  }
});

export default router;