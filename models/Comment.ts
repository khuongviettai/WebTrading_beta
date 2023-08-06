import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default commentSchema;
