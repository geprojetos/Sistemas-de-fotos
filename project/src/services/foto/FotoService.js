export default class FotoService {

    constructor(resource) {

        this._resource = resource('v1/fotos{/id}');
    }

    list() {

        return this._resource
            .query()
            .then( res => res.json() )
    };

    save(foto) {

        return this._resource
            .save(foto)
            .then(
                () => {}, 
                erro => {
                    console.log(erro)
                }
            )
    };

    remove(id) {

        return this._resource
            .delete({id})
            .then( () => {}, erro => {
                console.log(erro)
            });
    }
}