import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { authMiddleware } from "../middleware/authMiddleware.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/me", authMiddleware, upload.single("profilePic"), async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, email, place, password } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (place) user.place = place;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (req.file) user.profilePic = req.file.path;

    await user.save();

    const { password: pw, ...userData } = user.toObject();
    res.json({ message: "Profile updated successfully", user: userData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;