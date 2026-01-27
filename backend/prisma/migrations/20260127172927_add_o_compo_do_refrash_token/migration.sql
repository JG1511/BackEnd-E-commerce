/*
  Warnings:

  - A unique constraint covering the columns `[nomeCategoria]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Produto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refreshToken` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "refreshToken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nomeCategoria_key" ON "Categoria"("nomeCategoria");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_key" ON "Produto"("nome");
