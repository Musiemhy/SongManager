import dotenv from "dotenv";

dotenv.config();

export const PORT = 5555;

export const MongoDBURL = process.env.MONGODB_URL;

if (!MongoDBURL) {
  throw new Error("Missing MONGODB_URL in .env file");
}
