import express from "express";
import { clearTable, createTable, dropTable, readTable } from "../controllers/tables.controllers";
import { processDirectory } from "../controllers/processMP3.controller";

const routes = express.Router();

routes.post("/processDirectory", processDirectory);
routes.post("/createTable", createTable);
routes.post("/readTable", readTable);
routes.delete("/clearTable", clearTable);
routes.delete("/dropTable", dropTable);

export default routes;
