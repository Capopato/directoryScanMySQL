// import nodeID3 from "node-id3";
// import fs from "fs";
// import { connect, mySQLQuery } from "./config/mySQL.config";
// import { processMP3File } from "./utils/processMP3.util";

// /**
//  * Use nodeID3 to scan all the mp3 files inside a folder
//  * Use fs to iterate over multiple folder and scan all the files inside those folders.
//  * Create a config file to set a MySQL connection
//  *
//  */

// // export const processMP3File = async (filePath: string) => {
// //   const buffer = fs.readFileSync(filePath);
// //   const tags = nodeID3.read(buffer);
// //   const title = tags.title || null;
// //   const artist = tags.artist || null;
// //   const album = tags.album || null;
// //   const year = tags.year || null;

// //   console.log(year);
// //   const connection = await connect();
// //   const createTableCommand = `CREATE TABLE IF NOT EXISTS HipHop(
// //       id INT AUTO_INCREMENT PRIMARY KEY,
// //       title VARCHAR(255),
// //       artist VARCHAR(255),
// //       album VARCHAR(255),
// //       year INT ,
// //     )`;
// //   const queryCommand = `INSERT INTO HipHop (title, artist, album, year) VALUES (?,?,?,?)`;
// //   const queryValue = [title, artist, album, year];
// //   try {
// //     const result = await mySQLQuery(connection, queryCommand, queryValue);
// //     // console.log(result);
// //   } catch (error) {
// //     return console.log(error);
// //   }
// // };

// // processDir("/Users/tom/Desktop/test");
