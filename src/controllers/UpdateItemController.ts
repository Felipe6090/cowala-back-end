import { Request, Response } from "express";
import { UpdateItemService } from "../services/UpdateItemService";

class UpdateItemController {
  async handle(req: Request, res: Response) {
    const { id, newData } = req.body;

    const service = new UpdateItemService();

    const result = await service.execute(id, newData);

    return res.json(result);
  }
}

export { UpdateItemController };
