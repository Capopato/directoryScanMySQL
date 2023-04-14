import { Request, Response, NextFunction } from "express";
import { connect, mySQLQuery } from "../config/mySQL.config";

export const createArtistTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tableToBeCreated = req.body.tableToBeCreated;
    const columnOne = "name VARCHAR(255)";

    const queryCommand = `CREATE TABLE IF NOT EXISTS ${tableToBeCreated}(
    id INT AUTO_INCREMENT PRIMARY KEY,
    ${columnOne}
  )`;

    const connection = await connect();
    const result = await mySQLQuery(connection, queryCommand);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const createAlbumTable = async (req: Request, res: Response, next: NextFunction) => {
  const tableToBeCreated = req.body.tableToBeCreated;
  try {
    const columnOne = `name VARCHAR(255)`;
    const columnTwo = `artistID INT NOT NULL`;
    const columnThree = `FOREIGN KEY (artistID) REFERENCES Artists(id)`;

    const queryCommand = `CREATE TABLE IF NOT EXISTS ${tableToBeCreated} (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ${columnOne},
    ${columnTwo},
    ${columnThree}
    )`;

    const connection = await connect();
    const result = await mySQLQuery(connection, queryCommand);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
