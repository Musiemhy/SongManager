import { User } from "../models/userModels.js";

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

    const newUser = {
      name,
      password,
    };
    const user = await User.create(newUser);

    if (!user) {
      return response.status(404).send({
        message: "Couldn't add user!",
      });
    }

    return response.status(201).send({ message: "registered" });
  } catch (error) {
    console.log(error);
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
