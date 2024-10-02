import {
  uploadImageCDN,
  deleteImageCDN,
  updaterImageCDN,
  extractPublicId,
} from "../contentDeliveryNetwork.js";
import { Song } from "../models/songModels.js";

export const addSong = async (request, response) => {
  try {
    const {
      User,
      title,
      artist,
      album,
      genre,
      releaseDate,
      duration,
      coverImages,
    } = request.body;

    if (!User || !title || !artist || !genre || !duration || !coverImages) {
      const err = new Error("Please fill all required fields!");
      err.name = "CustomError";
      throw err;
    }

    const optimizedImg = await uploadImageCDN(coverImages);
    const coverImage = optimizedImg.optimizeImgUrl;

    console.log({
      User,
      title,
      artist,
      album,
      genre,
      releaseDate,
      duration,
      coverImage,
    });
    const newSong = {
      User,
      title,
      artist,
      album,
      genre,
      releaseDate,
      duration,
      coverImage,
    };

    const song = await Song.create(newSong);

    if (!song) {
      const err = new Error("Couldn't add song!");
      err.name = "CustomError";
      throw err;
    }

    return response.status(201).send({
      message: "Song added successfully!",
      newSong: song,
    });
  } catch (error) {
    if (error.name === "CustomError") {
      response.status(400).send({ message: error.message });
    } else {
      console.error(error);
      response.status(500).send({ message: error.message });
    }
  }
};

export const getSong = async (req, res) => {
  try {
    const { User } = req.body;

    if (!User) {
      return res.status(400).send({ message: "Please login!" });
    }

    const songs = await Song.find({ User });

    if (!songs || songs.length === 0) {
      return res.status(404).send({ message: "No songs found!" });
    }

    return res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

export const getSongByArtist = async (req, res) => {
  try {
    const { User, artist } = req.body;

    if (!User || !artist) {
      return res.status(400).send({ message: "Please select artist!" });
    }

    const song = await Song.find({ User, artist });

    if (!song) {
      return res
        .status(404)
        .send({ message: "No song found for this artist!" });
    }

    return res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

export const getSongByGenre = async (req, res) => {
  try {
    const { User, genre } = req.body;

    if (!User || !genre) {
      return res.status(400).send({ message: "Please select genre!" });
    }

    const songs = await Song.find({ User, genre });

    if (!songs || songs.length === 0) {
      return res
        .status(404)
        .send({ message: "No songs found for this genre!" });
    }

    return res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

export const updateSong = async (req, res) => {
  try {
    const {
      songId,
      User,
      title,
      artist,
      album,
      genre,
      releaseDate,
      duration,
      coverImages,
    } = req.body;

    const existingSong = await Song.findById(songId);
    let coverImage;

    if (!existingSong) {
      return res.status(404).json({ message: "Song not found" });
    } else {
      if (existingSong.coverImage === coverImages) {
        coverImage = coverImages;
      } else {
        const optimizedImg = await updaterImageCDN(
          existingSong.coverImage,
          coverImages
        );
        coverImage = optimizedImg.optimizeImgUrl;
      }
    }

    console.log({
      User,
      title,
      artist,
      album,
      genre,
      releaseDate,
      duration,
      coverImage,
    });

    const updatedSong = await Song.findByIdAndUpdate(
      songId,
      { User, title, artist, album, genre, releaseDate, duration, coverImage },
      { new: true }
    );

    if (!updatedSong) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json(updatedSong);
  } catch (error) {
    console.error("Error updating song: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { songId } = req.body;

    if (!songId) {
      return res.status(400).send({ message: "Did not receive songId!" });
    }

    const existingSong = await Song.findById(songId);

    if (!existingSong) {
      return res.status(404).json({ message: "Song not found" });
    }

    const publicId = await extractPublicId(existingSong.coverImage);

    await deleteImageCDN(publicId);

    const deleteResult = await Song.deleteOne({ _id: songId });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).send({ message: "No song was deleted" });
    }

    return res.status(200).json({ songId: songId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
