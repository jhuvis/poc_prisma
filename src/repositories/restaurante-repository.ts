import { prisma } from "../database";
import { Pratos } from "@/protocols";

async function getPratos(tipo: string) {
  const pratos = await prisma.pratos.findMany({
    where:{
      tipo_prato:{
        nome: tipo,
      }
    }
  });                                           
  return pratos
}

async function getPrato(id: number) {
  const prato = await prisma.pratos.findUnique({
    where:{
      id
      }
  });                                           
  return prato
}

async function findByTitle(nome: string){

  const prato = await prisma.pratos.findUnique({
    where:{
      nome
    }
  });

  return prato
}

async function getTipo(nome: string) {
    const prato = await prisma.tipo_prato.findUnique({
      where:{
        nome
      }
    });

    return prato

  }

async function postTipo(nome: string) {

    const tipo = await prisma.tipo_prato.create({
      data: {
        nome
      }
    });
    return tipo
  }

async function postPrato(prato: Pratos, id_tipo_prato: number) {

  const p = await prisma.pratos.create({
    data: {
      nome: prato.nome,
      desc: prato.desc,
      preco: prato.preco,
      id_tipo_prato: id_tipo_prato,
    }
  });
  return p
}

async function deletePrato(id: number) {
    const p = await prisma.pratos.delete({
      where: {
        id
      }
    });
    return p;
  }
export default {
    getPratos,
    findByTitle,
    getTipo,
    postTipo,
    postPrato,
    deletePrato,
    getPrato
};