import { Request, Response } from "express";
function rootRouter(repo) {
  const list = async (req: Request, res: Response) => {
    res.json(await repo.find());
  };

  const single = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(await repo.findOne({ id }));
  };

  const create = async (req: Request, res: Response) => {
    return res.json(await repo.save(req.body));
  };

  const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.json(await repo.remove({ id }));
  };

  const update = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    res.json(await repo.update(id, req.body));
  };

  const message = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    res.json(await repo.message(id));
  };

  return { list, single, create, remove, update, message };
}
export default rootRouter;
