import dotenv from "dotenv";
import express from "express";
import { join } from "path";
import { searchMusics } from "node-youtube-music";
import { getByOneMusic } from "./music.js";
import cors from "cors";
dotenv.config({
  path: join(process.cwd(), "..", "..") + "/.env",
});
const app = express();
app.use(cors());
app.use(express.json());

app.get("/song", async (req, res) => {
  try {
    const data = await searchMusics(req.query.q);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: error.message || "Internal Server Error",
    });
  }
});
app.get("/song/:songId", async (req, res) => {
  try {
    const formats = await getByOneMusic(req.params.songId);
    return res.status(200).json(formats);
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      message: error.message || "Something went wrong",
    });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
