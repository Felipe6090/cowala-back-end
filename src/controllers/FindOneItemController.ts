import { Request, Response } from "express";
import { FindOneItemService } from "../services/FindOneItemService";

class FindOneItemController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const service = new FindOneItemService();

    const result = await service.execute(id);

    return res.json(result);
  }
}

export { FindOneItemController };
