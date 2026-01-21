import CarrinhoRepository from "../repository/carrinhoRepository";
class CarrinhoServicer {
    async getCarrinho(userId: string) {
        const row = CarrinhoRepository.findCart(userId);
        return row;
    }

    async createCarrinho(userId: string) {
        const row = CarrinhoRepository.create(userId);
        return row;
    }

    async addProdutoNoCarrinho(carrinhoId: string, produtoId: string, quantidade: number, preco: number) {
        const row = CarrinhoRepository.addProductToCart(carrinhoId, produtoId, quantidade, preco);
        return row;
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