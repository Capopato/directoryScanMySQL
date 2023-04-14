import express from "express";
import { createAlbumTable, createArtistTable } from "../HipHopControllers/tables.HipHop";

const HipHopRoutes = express.Router();

HipHopRoutes.post("/createArtistTable", createArtistTable);
HipHopRoutes.post("/createAlbumTable", createAlbumTable);

export default HipHopRoutes;
