import express from "express";
import path from "path";

import mediaRouter from "./controllers/routers/mediaRouter";
import noteRouter from "./controllers/routers/noteRouter";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

app.use("/api/media", mediaRouter);
app.use("/api/note", noteRouter);

export default app;
