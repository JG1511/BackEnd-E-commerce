import CategoriaServicer from "../services/categoriaServicer"

class CategoriaController {
    async getCategoria(req: any, res: any) {
        const categoriaAll = await CategoriaServicer.getCategoria();
        res.status(200).json(categoriaAll);
    }

    async getCategoriaId(req: any, res: any) {
        const { id } = req.params;
        const categoriaId = await CategoriaServicer.getCategoriaId(id)
        res.status(200).json(categoriaId)
    }

    async createCategoria(req: any, res: any) {
        const {nome,descricao} = req.body;
        const newCategoria = await CategoriaServicer.createCategoria(nome,descricao);
        res.status(201).json(newCategoria);
    }

    async updateCategoria(req : any, res : any){
        const {id} = req.params;
        const{nome,descricao} = req.body;
        const updateCategoria = await CategoriaServicer.updateCategoria(id,nome,descricao)
        res.status(200).json(updateCategoria)
    }

    async deleteCategoria(req : any, res : any){
        const {id} = req.params;
        await CategoriaServicer.deleteCategoria(id);
        res.status(200).json({message : 'Categoria excluida com sucesso'})
    }

    async categoriaComProduto(req : any, res : any){
        const {id} = req.params;
        const categoriaComProduto = await CategoriaServicer.categoriaComProduto(id);
        res.status(200).json(categoriaComProduto);
    }

    
}

export default new CategoriaController();