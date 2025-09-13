import express from "express";
import multer from "multer";
import path from "path";
import Blog from "../models/Blog.js";

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// CREATE
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      img: req.file ? "/uploads/" + req.file.filename : null,
    });
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to add blog" });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// UPDATE
router.put("/:id", upload.single("img"), async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    if (req.file) updatedData.img = "/uploads/" + req.file.filename;

    const blog = await Blog.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;