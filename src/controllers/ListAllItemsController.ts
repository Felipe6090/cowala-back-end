import { Request, Response } from "express";
import { ListAllItemsService } from "../services/ListAllItemsService";

class ListAllItemsController {
  async handle(req: Request, res: Response) {
    const service = new ListAllItemsService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { ListAllItemsController };
