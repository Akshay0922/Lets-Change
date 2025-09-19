// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   place: { type: String, required: true },
//   password: { type: String, required: true },
//   profilePic: { type: String, default: "" },
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);








import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    place: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },

    // Fields for password reset
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);