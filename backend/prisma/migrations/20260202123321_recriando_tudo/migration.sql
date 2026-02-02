-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "refreshToken" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "cor" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "categoriaID" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nomeCategoria" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Recomendacao" (
    "id_recomendacao" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "Recomendacao_pkey" PRIMARY KEY ("id_recomendacao")
);

-- CreateTable
CREATE TABLE "Lista_Favorito" (
    "id_favorito" SERIAL NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "Lista_Favorito_pkey" PRIMARY KEY ("id_favorito")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id_carrinho" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id_carrinho")
);

-- CreateTable
CREATE TABLE "Item_Carrinho" (
    "id_item" SERIAL NOT NULL,
    "produtoId" TEXT NOT NULL,
    "carrinhoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_unitario" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Item_Carrinho_pkey" PRIMARY KEY ("id_item")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_compra" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(65,30) NOT NULL,
    "status" TEXT NOT NULL,
    "forma_pagamento" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id_compra")
);

-- CreateTable
CREATE TABLE "Item_Compra" (
    "id_item_compra" SERIAL NOT NULL,
    "compraId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "Item_Compra_pkey" PRIMARY KEY ("id_item_compra")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nomeCategoria_key" ON "Categoria"("nomeCategoria");

-- CreateIndex
CREATE UNIQUE INDEX "Recomendacao_produtoId_usuarioId_key" ON "Recomendacao"("produtoId", "usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Lista_Favorito_produtoId_usuarioId_key" ON "Lista_Favorito"("produtoId", "usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_Carrinho_produtoId_carrinhoId_key" ON "Item_Carrinho"("produtoId", "carrinhoId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_Compra_compraId_produtoId_key" ON "Item_Compra"("compraId", "produtoId");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaID_fkey" FOREIGN KEY ("categoriaID") REFERENCES "Categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recomendacao" ADD CONSTRAINT "Recomendacao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recomendacao" ADD CONSTRAINT "Recomendacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lista_Favorito" ADD CONSTRAINT "Lista_Favorito_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lista_Favorito" ADD CONSTRAINT "Lista_Favorito_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Carrinho" ADD CONSTRAINT "Item_Carrinho_carrinhoId_fkey" FOREIGN KEY ("carrinhoId") REFERENCES "Carrinho"("id_carrinho") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Carrinho" ADD CONSTRAINT "Item_Carrinho_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Compra" ADD CONSTRAINT "Item_Compra_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("id_compra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Compra" ADD CONSTRAINT "Item_Compra_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE;
