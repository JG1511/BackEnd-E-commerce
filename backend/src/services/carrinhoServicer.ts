import CarrinhoRepository from "../repository/carrinhoRepository";
import ProdutoRepository from "../repository/produtoRepository";
class CarrinhoServicer {
    async getCarrinho(userId: string) {
        const row = await CarrinhoRepository.findCart(userId);
        return row;
    }

    async createCarrinho(userId: string) {
        const row = await CarrinhoRepository.create(userId);
        return row;
    }

    async addProdutoNoCarrinho(userId : string, produtoId: string, quantidade: number) {
        
        // Buscar carrinho aberto
        let carrinho = await CarrinhoRepository.findCart(userId)
        // Criar se não existir
        if(!carrinho){
            carrinho = await CarrinhoRepository.create(userId)
        }
        // Busca o produto(ele não vem do front)
        const produto = await ProdutoRepository.findId(produtoId)

        if(!produtoId){
            throw new Error('Produto não encontrado')
        }

        const row = await CarrinhoRepository.addProductToCart(carrinho.id_carrinho,produtoId,quantidade,produto?.preco)
    }

    async listProdutosNoCarrinho(carrinhoId: string) {
        const row = CarrinhoRepository.listProductsInCart(carrinhoId);
        return row;
    }

    async addItemNaQuantidade(itemId: number, quantidade: number) {
        const itemExist = CarrinhoRepository.findItemById(itemId);
        if (!itemExist) {
            throw new Error('Este intem não pode ser icrementado, pois ele não existe')
        } else {
            if (quantidade < 0) {
                throw new Error('Você não é o batman para add intem negativos')
            } else {
                const row = CarrinhoRepository.incrementItemQuantity(itemId, quantidade)
                return row;
            }
        }
    }

    async deleteItem(itemId : number){
        CarrinhoRepository.deleteItem(itemId);
    }
}

export default new CarrinhoServicer();