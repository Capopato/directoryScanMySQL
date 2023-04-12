import express from "express";
import { clearTable, createTable, dropTable, readTable } from "../controllers/HipHop.controllers";
import { processDirectory } from "../controllers/processMP3.controller";

const HipHopRoutes = express.Router();

HipHopRoutes.post("/processDirectory", processDirectory);
HipHopRoutes.post("/createTable", createTable);
HipHopRoutes.post("/readTable", readTable);
HipHopRoutes.delete("/clearTable", clearTable);
HipHopRoutes.delete("/dropTable", dropTable);

export default HipHopRoutes;
