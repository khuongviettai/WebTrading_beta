import mongoose from 'mongoose';
import postsSchema from './Posts';
import commentSchema from './Comment';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
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
    avatar: {
      type: String,
      require: true,
    },
    admin: {
      type: Boolean,
      default: false,
      require: true,
    },
    birthDate: {
      type: Date,
      require: true,
    },
    posts: [postsSchema],
    comments: [commentSchema],
  },
  { timestamps: true },
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model('User', userSchema);
