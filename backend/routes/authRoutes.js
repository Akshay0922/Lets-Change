// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import multer from "multer";
// import path from "path";
// import User from "../models/User.js";
// import {authMiddleware} from "../middleware/authMiddleware.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) =>
//     cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

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

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         place: user.place,
//         profilePic: user.profilePic || null,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.put(
//   "/update-profile",
//   authMiddleware,
//   upload.single("profilePic"),
//   async (req, res) => {
//     try {
//       const { name, email, place, password } = req.body;
//       const updateData = { name, email, place };

//       if (password) {
//         const salt = await bcrypt.genSalt(10);
//         updateData.password = await bcrypt.hash(password, salt);
//       }

//       if (req.file) {
//         updateData.profilePic = req.file.path;
//       }

//       const user = await User.findByIdAndUpdate(req.user.id, updateData, {
//         new: true,
//       }).select("-password");

//       res.json({ message: "Profile updated", user });
//     } catch (err) {
//       res.status(500).json({ message: "Server error" });
//     }
//   }
// );

// export default router;










import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import crypto from "crypto";
import nodemailer from "nodemailer";

import User from "../models/User.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// --------- Multer setup ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// --------- Signup ----------
router.post("/signup", async (req, res) => {
  try {
    const { name, email, place, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, place, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// --------- Login ----------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

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

// --------- Update Profile ----------
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

// --------- Forgot Password ----------
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User with this email not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpiry;
    await user.save();

    // Setup email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset.</p>
             <p>Click this link to reset your password: <a href="${resetUrl}">Reset Password</a></p>
             <p>This link will expire in 1 hour.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Password reset link sent to your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// --------- Reset Password ----------
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: "Password is required" });

  try {
    // Find user with this token and check if token is still valid
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    // Hash new password and save
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Remove reset token & expiry
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ message: "Password has been reset successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


export default router;