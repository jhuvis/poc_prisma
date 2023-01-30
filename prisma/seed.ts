import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let prato = await prisma.pratos.findFirst();
  if (!prato) {
    let tipo_prato = await prisma.tipo_prato.findFirst();
    if(!tipo_prato)
    {
        tipo_prato = await prisma.tipo_prato.create({
            data:{
                nome: "comidas"
            }
        })
    }
    await prisma.pratos.createMany({
        data: [
            {
                nome: "peixe",
                desc: "peixe frito com batata",
                preco: 2999,
                id_tipo_prato: tipo_prato.id,
            },
            {
                nome: "carne",
                desc: "carne assada com batata",
                preco: 3299,
                id_tipo_prato: tipo_prato.id,
            },
            {
                nome: "sopa",
                desc: "sopa com batata",
                preco: 1999,
                id_tipo_prato: tipo_prato.id,
            },
        ]
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
