// import express from "express";
// import multer from "multer";
// import SuccessStory from "../models/SuccessStory.js";
// import path from "path";
// import fs from "fs";

// const router = express.Router();

// // ✅ Multer config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = path.join(process.cwd(), "uploads");
//     // agar folder exist nahi karta to bna do
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const upload = multer({ storage });

// // ✅ GET all stories
// router.get("/", async (req, res) => {
//   try {
//     const stories = await SuccessStory.find().sort({ createdAt: -1 });
//     res.json(stories);
//   } catch (err) {
//     console.error("Error fetching stories:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // GET single story by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const story = await SuccessStory.findById(req.params.id);
//     if (!story) return res.status(404).json({ error: "Story not found" });
//     res.json(story);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ POST new story
// router.post("/", upload.single("img"), async (req, res) => {
//   try {
//     const { name, role, story } = req.body;
//     const img = req.file ? `/uploads/${req.file.filename}` : "";
//     const newStory = new SuccessStory({ name, role, story, img });
//     await newStory.save();
//     res.status(201).json(newStory);
//   } catch (err) {
//     console.error("Error saving story:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ UPDATE story (with optional new image)
// router.put("/:id", upload.single("img"), async (req, res) => {
//   try {
//     const { name, role, story } = req.body;

//     const updateData = { name, role, story };
//     if (req.file) {
//       updateData.img = `/uploads/${req.file.filename}`;
//     }

//     const updatedStory = await SuccessStory.findByIdAndUpdate(
//       req.params.id,
//       { $set: updateData },
//       { new: true }
//     );

//     if (!updatedStory) return res.status(404).json({ error: "Story not found" });

//     res.json(updatedStory);
//   } catch (err) {
//     console.error("Error updating story:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ DELETE story
// router.delete("/:id", async (req, res) => {
//   try {
//     const story = await SuccessStory.findByIdAndDelete(req.params.id);
//     if (!story) return res.status(404).json({ error: "Story not found" });

//     res.json({ message: "Story deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting story:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });


// export default router;
















import express from "express";
import multer from "multer";
import SuccessStory from "../models/SuccessStory.js";
import path from "path";
import fs from "fs";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), "uploads");
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

// ✅ GET all stories (Public)
router.get("/", async (req, res) => {
  try {
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    console.error("Error fetching stories:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ GET single story by ID (Public)
router.get("/:id", async (req, res) => {
  try {
    const story = await SuccessStory.findById(req.params.id);
    if (!story) return res.status(404).json({ error: "Story not found" });
    res.json(story);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new story (Protected)
router.post("/", authMiddleware, upload.single("img"), async (req, res) => {
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

// ✅ UPDATE story (Protected)
router.put("/:id", authMiddleware, upload.single("img"), async (req, res) => {
  try {
    const { name, role, story } = req.body;

    const updateData = { name, role, story };
    if (req.file) {
      updateData.img = `/uploads/${req.file.filename}`;
    }

    const updatedStory = await SuccessStory.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedStory) return res.status(404).json({ error: "Story not found" });

    res.json(updatedStory);
  } catch (err) {
    console.error("Error updating story:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ DELETE story (Protected)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const story = await SuccessStory.findByIdAndDelete(req.params.id);
    if (!story) return res.status(404).json({ error: "Story not found" });

    res.json({ message: "Story deleted successfully" });
  } catch (err) {
    console.error("Error deleting story:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;