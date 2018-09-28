export default class FotoService {

    constructor(resource) {

        this._resource = resource('v1/fotos{/id}');
    }
}