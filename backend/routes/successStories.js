import express from "express";
import multer from "multer";
import SuccessStory from "../models/SuccessStory.js";
import path from "path";
import fs from "fs";

const router = express.Router();

// ✅ Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), "uploads");
    // agar folder exist nahi karta to bna do
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

// ✅ GET all stories
router.get("/", async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    console.error("Error fetching stories:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET single story by ID
router.get("/:id", async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) return res.status(404).json({ error: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new story
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const { name, role, story } = req.body;
    const img = req.file ? `/uploads/${req.file.filename}` : "";
    const newStory = new SuccessStory({ name, role, story, img });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    console.error("Error saving story:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;