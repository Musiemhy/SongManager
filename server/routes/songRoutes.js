import express from "express";
import {
  addSong,
  getSong,
  getSongByArtist,
  getSongByGenre,
  updateSong,
  deleteSong,
} from "../controllers/songController.js";

const router = express.Router();

router.post("/addsong", addSong);
router.post("/getsong", getSong);
router.post("/getsongbyartist", getSongByArtist);
router.post("/getsongbygenre", getSongByGenre);
router.put("/updatesong", updateSong);
router.delete("/deletesong", deleteSong);

export default router;
