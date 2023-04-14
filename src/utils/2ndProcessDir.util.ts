import { processMP3File } from "./processMP3.util";
import fs from "fs";

/**
 * This function is created to scan over the directories inside the orignal directory.
 */
export const secondProcessDirectoryScan = async (dirPath: string, table: string) => {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = `${dirPath}/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await secondProcessDirectoryScan(filePath, table);
    } else if (filePath.endsWith(".mp3")) {
      await processMP3File(filePath, table);
    }
  }
};
