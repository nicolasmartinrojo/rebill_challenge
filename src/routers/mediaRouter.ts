import { Router } from "express";
import { MediaRepository } from "../repositories/MediaRepository";
import rootRouter from "./rootRouter";
const mediaRouter = Router();

const router = rootRouter(new MediaRepository());
mediaRouter.get("/", router.list);
mediaRouter.get("/:id", router.single);
mediaRouter.get("/:id/message", router.message);
mediaRouter.post("/", router.create);
mediaRouter.put("/:id", router.update);
mediaRouter.delete("/:id", router.remove);

export default mediaRouter;
