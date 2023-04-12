import express from "express";
import { port } from "./config/config";
import HipHopRoutes from "./routes/HipHop.routes";

const app = express();
app.use(express.json());
app.use("/HipHop", HipHopRoutes);
app.listen(port, () => console.log(`Server is running at port: ${port}`));
