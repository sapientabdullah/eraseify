import mongoose from "mongoose";

const connect = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/eraseify`);
};

export default connect;
