import mongoose from 'mongoose';
import postsSchema from './Posts';
import commentSchema from './Comment';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    avatar: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
      require: true,
    },
    birthDate: {
      type: Date,
    },
    posts: [postsSchema],
    comments: [commentSchema],
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
