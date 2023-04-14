import { connect, mySQLQuery } from "../config/mySQL.config";

export const addSong = async (title: string | null, artist: string | null, album: string | null, year: number | null, table?: string) => {
  try {
    const connection = await connect();
    const queryCommand = `INSERT INTO ${table} (title, artist, album, year) VALUES (?,?,?,?)`;
    const queryValues = [title, artist, album, year];
    const result = mySQLQuery(connection, queryCommand, queryValues);
    connection.end();
  } catch (error) {
    console.log(`Action could not be performed because of error: ${error}`);
    return;
  }
};
