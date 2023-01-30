-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos_pratos" (
    "id" SERIAL NOT NULL,
    "id_pratos" INTEGER NOT NULL,
    "id_pedidos" INTEGER NOT NULL,

    CONSTRAINT "pedidos_pratos_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pratos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "id_tipo_prato" INTEGER NOT NULL,

    CONSTRAINT "pratos_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_prato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_prato_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pratos_nome_key" ON "Pratos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_prato_nome_key" ON "tipo_prato"("nome");

-- AddForeignKey
ALTER TABLE "pedidos_pratos" ADD CONSTRAINT "pedidos_pratos_fk0" FOREIGN KEY ("id_pratos") REFERENCES "Pratos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedidos_pratos" ADD CONSTRAINT "pedidos_pratos_fk1" FOREIGN KEY ("id_pedidos") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Pratos" ADD CONSTRAINT "pratos_fk0" FOREIGN KEY ("id_tipo_prato") REFERENCES "tipo_prato"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
