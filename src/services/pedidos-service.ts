import { Pedidos } from "../protocols";
import pedidosRepository from "../repositories/pedidos-repository";
import restauranteRepository from "../repositories/restaurante-repository";
  
  async function postPedido(pedido: Pedidos, id_pratos: number[]) 
  {
    
    if (!pedido || id_pratos.length === 0)
      throw { type: "bad request", message: "missing data" };

    for (let i = 0; i < id_pratos.length; i++) 
    {
        let existingPrato = await restauranteRepository.getPrato(id_pratos[i]);
        if (!existingPrato)
        {
            throw { type: "bad request", message: "prato nao existe" };
        }
    }
    const pede = await pedidosRepository.postPedido(pedido, id_pratos);

    return pede
  }

  export default {
    postPedido
  };