import express from "express";

import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "../server/routes/userRoutes.js";
import songRoutes from "../server/routes/songRoutes.js";
import bodyParser from "body-parser";

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "20mb" })); //to controle Parse incoming request bodies(eg size,default was 100kb)
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(cors());

app.use(express.json());

const testmongosconnection = async () => {
  await mongoose
    .connect(MongoDBURL)
    .then(() => {
      console.log("App connected to database.");
      app.listen(PORT, () => {
        console.log(`App is listening on port: ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
await testmongosconnection();

app.use("/api", userRoutes);
app.use("/api", songRoutes);

app.get(`/`, (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});
