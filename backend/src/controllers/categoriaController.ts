import CategoriaServicer from "../services/categoriaServicer"

class CategoriaController {
    async getCategoria(req: any, res: any) {
        const categoriaAll = await CategoriaServicer.getCategoria();
        res.status(200).json(categoriaAll);
    }

    async categoriaId(req: any, res: any) {
        const { id } = req.params;
        const categoriaId = await CategoriaServicer.getCategoriaId(id)
        res.status(200).json(categoriaId)
    }

    async createCategoria(req: any, res: any) {
        const {nome,descricao} = req.body;
        const newCategoria = await CategoriaServicer.createCategoria(nome,descricao);
        res.status(201).json(newCategoria);
    }
}