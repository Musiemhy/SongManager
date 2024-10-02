import { Song } from "../models/songModels.js";
import { User } from "../models/userModels.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readSongsData = () => {
  const songsDataPath = join(__dirname, "data.json");
  const songsData = JSON.parse(fs.readFileSync(songsDataPath, "utf-8"));
  return songsData;
};

export const addUser = async (request, response) => {
  try {
    const { name, password, confirm_password } = request.body;

    if (!name || !password || !confirm_password) {
      return response
        .status(400)
        .send({ message: "Please fill all required fields!" });
    }
    if (password !== confirm_password) {
      return response.status(400).send({ message: "Passwords do not match!" });
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return response
        .status(400)
        .send({ message: "User already exists with this name!" });
    }

    const newUser = { name, password };
    const user = await User.create(newUser);

    if (!user) {
      return response.status(404).send({ message: "Couldn't add user!" });
    }

    const songsData = readSongsData();
    const songsToAdd = songsData.songs.map((song) => ({
      ...song,
      User: user._id,
    }));

    await Song.insertMany(songsToAdd);

    return response
      .status(201)
      .send({ message: "User registered and songs added successfully!" });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: error.message });
  }
};

export const getUserByNameAndPassword = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both name and password!" });
    }

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).send({
        message:
          "name is incorrect. Please enter the correct name you used during registration!",
      });
    }

    const isPasswordCorrect = await user.matchPassword(password);

    if (!isPasswordCorrect) {
      return res.status(404).send({
        message:
          "Password is incorrect. Please enter the correct password you used during registration!",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
