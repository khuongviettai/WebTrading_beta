import mongoose from "mongoose";

const connect = async () => {
  const mongoURI = process.env.MONGO;

  if (!mongoURI) {
    throw new Error("MONGO environment variable is not defined!");
  }

  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
