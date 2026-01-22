import ListafavoritoServicer from "../services/listafavoritoServicer";

class ListaFavoritoController {

    //async
    getListaFavorito(req : any, res : any) {
        // const {userId} = req.params;
        // const list = await ListafavoritoServicer.getListaFavorito(userId);
        res.status(200).json({message: 'olá, eu me chamo Goku'});

       
    }
}

export default new ListaFavoritoController();