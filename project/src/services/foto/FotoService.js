export default class FotoService {

    constructor(resource) {

        this._resource = resource('v1/fotos{/id}');
    }

    list() {

        return this._resource
            .query()
            .then( res => res.json() )
    }
}