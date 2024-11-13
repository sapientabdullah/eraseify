import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
