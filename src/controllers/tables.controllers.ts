import { Request, Response, NextFunction } from "express";
import { connect, mySQLQuery } from "../config/mySQL.config";

export const createTable = async (req: Request, res: Response, next: NextFunction) => {
  const tableToCreate = req.body.tableToCreate;
  const paramOne = req.body.paramOne;
  const paramTwo = req.body.paramTwo;
  const paramThree = req.body.paramThree;
  const paramFour = req.body.paramFour;
  const paramFive = req.body.paramFour;
  try {
    const connection = await connect();
    const queryInput = `CREATE TABLE IF NOT EXISTS ${tableToCreate} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ${paramOne},
        ${paramTwo},
        ${paramThree},
        ${paramFour}
    )`;
    const result = await mySQLQuery(connection, queryInput);
    const succes = `Table "${tableToCreate}" is created.`;
    console.log(succes);
    return res.status(200).json({ succes });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const readTable = async (req: Request, res: Response, next: NextFunction) => {
  const tableToRead = req.body.tableToRead;
  try {
    const connection = await connect();
    const queryCommand = `SELECT * FROM ${tableToRead}`;
    const result = await mySQLQuery(connection, queryCommand);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const clearTable = async (req: Request, res: Response, next: NextFunction) => {
  const commmandInput = req.body.commmandInput;
  try {
    const connection = await connect();
    const queryInput = `TRUNCATE TABLE ${commmandInput}`;
    const result = await mySQLQuery(connection, queryInput);
    const succes = `Table ${commmandInput} has been cleared.`;
    return res.status(200).json({ succes });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const dropTable = async (req: Request, res: Response, next: NextFunction) => {
  const tableToDrop = req.body.tableToDrop;
  try {
    const connection = await connect();
    const queryCommand = `DROP TABLE ${tableToDrop}`;
    const result = await mySQLQuery(connection, queryCommand);
    const succes = `Table "${tableToDrop}" has been removed.`;
    console.log(succes);
    res.status(200).json({ succes });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
