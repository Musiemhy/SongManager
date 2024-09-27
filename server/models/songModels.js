import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    artist: {
      type: String,
      required: true,
      trim: true,
    },
    album: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      default: Date.now,
    },
    duration: {
      type: Number,
      required: true,
    },
    coverImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Song = mongoose.model("Song", songSchema);
