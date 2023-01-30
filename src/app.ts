import express, {Express, Request, Response} from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./database";
import { restauranteRouter, pedidosRouter } from "./routers/index";


const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req: Request, res: Response) => res.send("OK!"))
  .use("/restaurante", restauranteRouter)
  .use("/pedido", pedidosRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}
export async function close(): Promise<void> {
  await disconnectDB();
}

const port = 4000;
init().then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}.`);
    });
  });

export default app;