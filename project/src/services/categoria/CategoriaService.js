import MensagemService from '../mensagem/MensagemService';

export default class CategoriaService {

    constructor(resource) {

        this._resource = resource('v1/grupos{/grupoId}');
        this._mensagem = new MensagemService();
    }

    list() {

        return this._resource
            .query()
            .then( res => res.json(), erro => {

                console.log(erro)

                return {
                    text: this._mensagem.categoriesError(),
                    class: this._mensagem.classError()
                }
            })
    }
}