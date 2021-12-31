import { Request, Response, Router } from "express";
import { NoteRepository } from "../../repositories/NotesRepository";
import rootRouter from "./rootRouter";
const noteRouter = Router();

const router = rootRouter(new NoteRepository());

const countDescription = async (req: Request, res: Response) => {
  const { id } = req.params;

  const repo = new NoteRepository();
  const note = await repo.findOne({ id });

  const description = note.description;
  const letters = description.split("");
  const result = {};
  letters.forEach((letter) => {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter] += 1;
  });
  res.json(result);
};
noteRouter.get("/", router.list);
noteRouter.get("/:id", router.single);
noteRouter.post("/", router.create);
noteRouter.get("/:id/message", router.message);
noteRouter.put("/:id", router.update);
noteRouter.delete("/:id", router.remove);
noteRouter.get("/:id/countDescription", countDescription);

export default noteRouter;
