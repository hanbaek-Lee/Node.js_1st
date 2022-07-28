const mongoose = require("mongoose");
//const { route } = require("../routes/posts");
const commentsSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      required: true,
      unique: true,
    },
    user: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
  }
);

module.exports = mongoose.model("Comment", commentsSchema);
