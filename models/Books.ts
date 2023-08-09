import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    download: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true },
);

const Books = mongoose.models.Books || mongoose.model('Books', bookSchema);

export default Books;
