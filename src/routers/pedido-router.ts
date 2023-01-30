import { Router } from "express";
import { validateBody } from "../middlewares";
import { postPedido } from "../controllers";
import { createPedidosSchema } from "../schemas";

const pedidosRouter = Router();

pedidosRouter
  .post("/", validateBody(createPedidosSchema), postPedido);
 

export { pedidosRouter };