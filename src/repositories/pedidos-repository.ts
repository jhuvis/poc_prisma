import { prisma } from "../database";
import { Pedidos } from "@/protocols";


async function postPedido(pedido: Pedidos, id_pratos: number[]) {

    const pede = await prisma.pedidos.create({
        data:{
            nome : pedido.nome,
            endereco : pedido.endereco,
            total : pedido.total
        }
    })

    for(let i = 0; i < id_pratos.length; i++)
    {
        await prisma.pedidos_pratos.createMany({
            data: {
                id_pratos: id_pratos[i],
                id_pedidos: pede.id
            }
        });
    } 

    return pede
}


export default {
    postPedido
};