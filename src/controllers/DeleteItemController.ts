import { Request, Response } from "express";
import { DeleteItemService } from "../services/DeleteItemService";

class DeleteItemController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const service = new DeleteItemService();

    await service.execute(id);

    return res.json("O item foi deletado com sucesso");
  }
}

export { DeleteItemController };
