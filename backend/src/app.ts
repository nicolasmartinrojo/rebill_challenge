import express from "express";
import cors from "cors";

import mediaRouter from "./routers/mediaRouter";
import noteRouter from "./routers/noteRouter";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/media", mediaRouter);
app.use("/api/note", noteRouter);

export default app;
