import mysql, { ConnectionConfig } from "mysql";
import config from "./config";

type queryValues = Array<string | number | boolean | null> | string;

const params: ConnectionConfig = {
  user: config.mysql.user,
  password: config.mysql.password,
  host: config.mysql.host,
  database: config.mysql.database,
};

export const connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);
    connection.connect((error) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      //   console.log("Connected to Mysql Database.");
      return resolve(connection);
    });
  });

export const mySQLQuery = async (connection: mysql.Connection, query: string, values?: queryValues) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      //   console.log(`Query executed: ${query}`);
      return resolve(result);
    });
  });
};
