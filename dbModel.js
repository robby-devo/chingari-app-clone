import mongoose from "mongoose";

const chingariSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// collection inside database
export default mongoose.model("chingariVideos", chingariSchema);

// chingariVideos is colleciton name
// module.exports = mongoose.model("chingariVideos", chingariSchema);
