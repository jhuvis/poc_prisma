import pedidosService from "../services/pedidos-service";
import { Response, Request } from "express";

export async function postPedido(req: Request, res: Response) {
    try {
  
        await pedidosService.postPedido(req.body.pedido, req.body.id_pratos);
  
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Não foi possível conectar ao servidor!');
    }
    
}
