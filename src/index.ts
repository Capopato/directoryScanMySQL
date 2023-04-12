import express from "express";
import { port } from "./config/config";
import routes from "./routes/tables.routes";

const app = express();
app.use(express.json());
app.use("/MySQL", routes);
app.listen(port, () => console.log(`Server is running at port: ${port}`));
