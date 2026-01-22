import ListafavoritoRepository from "../repository/listafavoritoRepository";

class ListaFavoritoServicer{
    async getListaFavorito(usuarioId : string){
        // const row = await ListafavoritoRepository.findList(usuarioId);
        // return row;

        return {message : 'Oi caba safado, isso aqui é apenas um', usuarioId}
    }
}

export default new ListaFavoritoServicer();