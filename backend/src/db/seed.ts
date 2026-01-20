import { prisma } from './db'

export async function runSeed() {
    console.log('🌱 Iniciando seed...')

    /* ==========================
       CATEGORIAS
    ========================== */
    const categorias = {
        eletronicos: await prisma.categoria.upsert({
            where: { nomeCategoria: 'Eletrônicos' },
            update: {},
            create: {
                nomeCategoria: 'Eletrônicos',
                descricao: 'Dispositivos eletrônicos em geral',
            },
        }),
        roupas: await prisma.categoria.upsert({
            where: { nomeCategoria: 'Roupas' },
            update: {},
            create: {
                nomeCategoria: 'Roupas',
                descricao: 'Vestuário masculino e feminino',
            },
        }),
        acessorios: await prisma.categoria.upsert({
            where: { nomeCategoria: 'Acessórios' },
            update: {},
            create: {
                nomeCategoria: 'Acessórios',
                descricao: 'Acessórios diversos',
            },
        }),
    }

    /* ==========================
       PRODUTOS
    ========================== */
    const produtos = {
        smartphone: await prisma.produto.upsert({
            where: { nome: 'Smartphone' },
            update: {},
            create: {
                nome: 'Smartphone',
                descricao: 'Celular Android',
                preco: 2500,
                cor: 'Preto',
                modelo: 'Galaxy S',
                categoriaID: categorias.eletronicos.id_categoria,
            },
        }),
        notebook: await prisma.produto.upsert({
            where: { nome: 'Notebook' },
            update: {},
            create: {
                nome: 'Notebook',
                descricao: 'Notebook para trabalho',
                preco: 4500,
                cor: 'Cinza',
                modelo: 'Dell Inspiron',
                categoriaID: categorias.eletronicos.id_categoria,
            },
        }),
        camisa: await prisma.produto.upsert({
            where: { nome: 'Camisa' },
            update: {},
            create: {
                nome: 'Camisa',
                descricao: 'Camisa de algodão',
                preco: 99.9,
                cor: 'Branca',
                modelo: 'Slim',
                categoriaID: categorias.roupas.id_categoria,
            },
        }),
        relogio: await prisma.produto.upsert({
            where: { nome: 'Relógio' },
            update: {},
            create: {
                nome: 'Relógio',
                descricao: 'Relógio esportivo',
                preco: 399.9,
                cor: 'Preto',
                modelo: 'Digital',
                categoriaID: categorias.acessorios.id_categoria,
            },
        }),
    }

    /* ==========================
       USUÁRIO
    ========================== */
    const usuario = await prisma.usuario.upsert({
        where: { email: 'joao@email.com' },
        update: {},
        create: {
            nome: 'João Guilherme',
            cpf: '12345678900',
            email: 'joao@email.com',
            senha: '123456', // HASH em produção
        },
    })

    /* ==========================
       CARRINHO
    ========================== */
    const carrinho = await prisma.carrinho.findFirst({
        where: {
            usuarioId: usuario.id_usuario,
            status: 'ABERTO',
        },
    }) ?? await prisma.carrinho.create({
        data: {
            usuarioId: usuario.id_usuario,
            status: 'ABERTO',
        },
    })

    /* ==========================
       ITENS DO CARRINHO
    ========================== */
    await prisma.item_Carrinho.upsert({
        where: {
            produtoId_carrinhoId: {
                carrinhoId: carrinho.id_carrinho,
                produtoId: produtos.smartphone.id_produto,
            },
        },
        update: { quantidade: 2 },
        create: {
            carrinhoId: carrinho.id_carrinho,
            produtoId: produtos.smartphone.id_produto,
            quantidade: 2,
            preco_unitario: produtos.smartphone.preco,
        },
    })

    await prisma.item_Carrinho.upsert({
        where: {
            produtoId_carrinhoId: {
                carrinhoId: carrinho.id_carrinho,
                produtoId: produtos.camisa.id_produto,
            },
        },
        update: { quantidade: 1 },
        create: {
            carrinhoId: carrinho.id_carrinho,
            produtoId: produtos.camisa.id_produto,
            quantidade: 1,
            preco_unitario: produtos.camisa.preco,
        },
    })

    /* ==========================
       FAVORITOS
    ========================== */
    await prisma.lista_Favorito.upsert({
        where: {
            produtoId_usuarioId: {
                usuarioId: usuario.id_usuario,
                produtoId: produtos.notebook.id_produto,
            },
        },
        update: {},
        create: {
            usuarioId: usuario.id_usuario,
            produtoId: produtos.notebook.id_produto,
        },
    })

    /* ==========================
       RECOMENDAÇÕES
    ========================== */
    await prisma.recomendacao.upsert({
        where: {
            produtoId_usuarioId: {
                usuarioId: usuario.id_usuario,
                produtoId: produtos.smartphone.id_produto,
            },
        },
        update: {},
        create: {
            usuarioId: usuario.id_usuario,
            produtoId: produtos.smartphone.id_produto,
        },
    })

    /* ==========================
       COMPRA
    ========================== */
    const compra = await prisma.compra.findFirst({
        where: { usuarioId: usuario.id_usuario },
    }) ?? await prisma.compra.create({
        data: {
            usuarioId: usuario.id_usuario,
            total: 5099.9,
            status: 'PAGO',
            forma_pagamento: 'CARTAO',
        },
    })

    await prisma.item_Compra.upsert({
        where: {
            compraId_produtoId: {
                compraId: compra.id_compra,
                produtoId: produtos.smartphone.id_produto,
            },
        },
        update: {},
        create: {
            compraId: compra.id_compra,
            produtoId: produtos.smartphone.id_produto,
        },
    })

    console.log('✅ Seed finalizado com sucesso!')
}
