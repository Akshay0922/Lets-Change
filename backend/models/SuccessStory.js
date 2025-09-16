import mongoose from "mongoose";

const SuccessStorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  story: { type: String, required: true },
  img: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("SuccessStory", SuccessStorySchema);