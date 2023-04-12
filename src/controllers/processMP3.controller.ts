import fs from "fs";
import { Request, Response, NextFunction } from "express";
import { processMP3File } from "../utils/processMP3.util";
import { secondProcessDirectoryScan } from "../utils/2ndProcessDir.util";

export const processDirectory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dirPath = req.body.dirPath;
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const filePath = `${dirPath}/${file}`;
      const typeOfFilePath = fs.statSync(filePath);
      if (typeOfFilePath.isDirectory()) {
        await secondProcessDirectoryScan(filePath);
      } else if (filePath.endsWith(".mp3")) {
        await processMP3File(filePath);
      }
    }
    res.status(200).json({ succes: "All files are added to the database." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
