// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const router = express.Router();

// // Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, place, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already registered" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, email, place, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "Signup successful" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // user check
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     // password match
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

//     // generate token
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email, place: user.place }
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;















import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import User from "../models/User.js";
import {authMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router();

// ------------------ MULTER CONFIG ------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ------------------ SIGNUP ------------------
router.post("/signup", async (req, res) => {
  try {
    const { name, email, place, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, place, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------ LOGIN ------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        place: user.place,
        profilePic: user.profilePic || null,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------ UPDATE PROFILE ------------------
router.put(
  "/update-profile",
  authMiddleware,
  upload.single("profilePic"),
  async (req, res) => {
    try {
      const { name, email, place, password } = req.body;
      const updateData = { name, email, place };

      if (password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(password, salt);
      }

      if (req.file) {
        updateData.profilePic = req.file.path;
      }

      const user = await User.findByIdAndUpdate(req.user.id, updateData, {
        new: true,
      }).select("-password");

      res.json({ message: "Profile updated", user });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;