import mongoose from 'mongoose';

const { Schema } = mongoose;

const indicatorSchema = new Schema(
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

const Indicator =
  mongoose.models.Indicator || mongoose.model('Indicator', indicatorSchema);

export default Indicator;
