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
      coverImage,
    } = request.body;

    if (!User || !title || !artist || !genre || !duration || !coverImage) {
      return response
        .status(400)
        .send({ message: "Please fill all required fields!" });
    }

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
      return response.status(404).send({
        message: "Couldn't add song!",
      });
    }

    return response.status(201).send({ message: "Song added successfully!" });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: error.message });
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
      coverImage,
    } = req.body;

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
      return res.status(400).send({ message: "Did not recieve songId!" });
    }

    const song = await Song.deleteOne({ _id: songId });

    if (!song) {
      return res.status(404).send({
        message: "No songs Yet",
      });
    }

    return res.status(200).json(song);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
