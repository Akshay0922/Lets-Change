import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import nodemailer from "nodemailer";
import authRoutes from "./routes/authRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

import successStoriesRoutes from "./routes/successStories.js";
import path from "path";
import { fileURLToPath } from "url";

import blogRoutes from "./routes/blogRoutes.js";

import aiRoutes from "./routes/aiRoutes.js";

// Middleware
app.use(express.json());

// app.use(cors());
app.use(cors({ origin: "http://localhost:5173" }));

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Success Stories API
app.use("/api/success-stories", successStoriesRoutes);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

app.use("/api/blogs", blogRoutes);

app.use("/api/ai", aiRoutes);

// Contact form route
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: 'Poppins', sans-serif; color: #374151;">
          <h2 style="color: #41a037;">LC Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #41a037; background: #e6f4ea;"><strong>Name</strong></td>
              <td style="padding: 10px; border: 1px solid #41a037;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #41a037; background: #e6f4ea;"><strong>Email</strong></td>
              <td style="padding: 10px; border: 1px solid #41a037;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #41a037; background: #e6f4ea;"><strong>Subject</strong></td>
              <td style="padding: 10px; border: 1px solid #41a037;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #41a037; background: #e6f4ea;"><strong>Message</strong></td>
              <td style="padding: 10px; border: 1px solid #41a037;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// DB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 2209;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));