import { Request, Response } from "express";
import { SaveItemService } from "../services/SaveItemService";

class SaveItemController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const service = new SaveItemService();

    const result = await service.execute(data);

    return res.json("O item foi salvo, o id é: " + result.id);
  }
}

export { SaveItemController };
