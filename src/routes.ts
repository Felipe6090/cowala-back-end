import { Request, Response, Router } from "express";

import { SaveItemController } from "./controllers/SaveItemController";
import { UpdateItemController } from "./controllers/UpdateItemController";
import { ListAllItemsController } from "./controllers/ListAllItemsController";
import { FindOneItemController } from "./controllers/FindOneItemController";
import { DeleteItemController } from "./controllers/DeleteItemController";

const saveItemController = new SaveItemController();
const updateItemController = new UpdateItemController();
const listAllItemsController = new ListAllItemsController();
const findOneItemController = new FindOneItemController();
const deleteItemController = new DeleteItemController();

const routes = Router();

routes.post("/saveItem", saveItemController.handle);

routes.patch("/updateItem", updateItemController.handle);

routes.get("/listAll", listAllItemsController.handle);

routes.get("/listOne", findOneItemController.handle);

routes.delete("/deleteItem", deleteItemController.handle);

export { routes };

//acho que passar o id do item no req.paramas, mas preferi deixar no body mesmo
