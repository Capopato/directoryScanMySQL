import express from "express";
import { clearTable, createTable, dropTable, giveCommand, readTable } from "../controllers/tables.controllers";
import { processDirectory } from "../controllers/processDir.controller";

const routes = express.Router();

routes.post("/processDirectory", processDirectory);
routes.post("/createTable", createTable);
routes.post("/readTable", readTable);
routes.delete("/clearTable", clearTable);
routes.delete("/dropTable", dropTable);
routes.post("/action", giveCommand);

export default routes;
