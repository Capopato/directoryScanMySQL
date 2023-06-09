import nodeID3 from "node-id3";
import fs from "fs";
import { addSong } from "./addSong.util";

export const processMP3File = async (filePath: string, table: string) => {
  const buffer = fs.readFileSync(filePath);
  const tags = nodeID3.read(buffer);
  console.log(tags);
  const title = tags.title || null;
  const artist = tags.artist || null;
  const album = tags.album || null;
  const year = Number(tags.year) || null;

  try {
    await addSong(title, artist, album, year, table);
  } catch (error) {
    console.log(error);
  }
};
