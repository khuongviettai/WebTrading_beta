import mongoose from 'mongoose';

const { Schema } = mongoose;

const tradingDiarySchema = new Schema(
  {
    date: {
      type: Date,
      require: true,
      default: Date.now(),
    },
    symbol: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    volume: {
      type: Number,
      require: true,
    },
    entry: {
      type: Number,
      require: true,
    },
    stop_loss: {
      type: Number,
      require: true,
    },
    take_profit: {
      type: Number,
      require: true,
    },
    profit: {
      type: Number,
      require: true,
    },
    notes: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.TradingDiary ||
  mongoose.model('TradingDiary', tradingDiarySchema);
