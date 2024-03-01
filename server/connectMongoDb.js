import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`MongoDB connected: ${process.env.CONNECTION_URL}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
    // console.log("hi")
  }
};

export default connectDB;
