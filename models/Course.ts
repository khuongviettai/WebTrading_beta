import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  imgBanner: {
    type: String,
    require: true,
  },
});

export default mongoose.model('Course', courseSchema);
