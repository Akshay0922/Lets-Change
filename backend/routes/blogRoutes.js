import express from "express";
import multer from "multer";
import path from "path";
import Blog from "../models/Blog.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("img"), async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.user.email,
      img: req.file ? "/uploads/" + req.file.filename : null,
    });
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to add blog" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

router.put("/:id", authMiddleware, upload.single("img"), async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      content: req.body.content,
    };

    if (req.file) {
      updatedData.img = "/uploads/" + req.file.filename;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: updatedData },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;