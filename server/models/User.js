import mongoose from "mongoose";
import postSchema from "./Post.js";
import commentSchema from "./Comment.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    posts: [postSchema],
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
